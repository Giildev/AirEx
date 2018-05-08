const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((usuario, done) => {
    done(null, usuario._id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, usuario) =>{
        done(err, usuario);
    })
})


exports.auth = (req, res) => {
    console.log(req.body.email);
    User.findOne({email: req.body.email}, (err, usuario) => {
        if(!usuario) {
            return done(null, false, {messege: 'Este email: ${email} no esta registrado en la base de datos'})
        } else {
            usuario.compararPassword(password, (err, sonIguales) =>{
                if (sonIguales) {
                    return done(null, usuario);
                } else {
                    return done(null, false, {messege: 'La contraseña no es valida'});
                }
            })
        }
    }) 
}

passport.use('local',new LocalStrategy(
    {usernameField: 'email'},
    (email, password, done) => {
        User.findOne({email}, (err, usuario) => {
            if(!usuario) {
                return done(null, false, {messege: 'Este email: ${email} no esta registrado en la base de datos'})
            } else {
                usuario.compararPassword(password, (err, sonIguales) =>{
                    if (sonIguales) {
                        return done(null, usuario);
                    } else {
                        return done(null, false, {messege: 'La contraseña no es valida'});
                    }
                })
            }
        })
    }
))

exports.estaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('tienes que hacer login para acceder a este recurso');
}

