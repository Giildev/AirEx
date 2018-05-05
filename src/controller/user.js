const passport = require('passport');
const User = require('../models/user');
var jwt = require('jsonwebtoken');

exports.postSignup = (req, res, next) => {
    var jsw_token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const nuevoUsuario = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        token: jsw_token
    });
    
    User.findOne({email: req.body.email}, (err, usuarioExistente) => {
        if(usuarioExistente) {
            return res.status(400).send('Ya este email esta registrado');
        }
        nuevoUsuario.save((err) => {
           if (err) {
               next(err);
           }
           req.login(nuevoUsuario, (err) => {
               if (err) {
                   next(err);
               }
               res.send({user_token: usuario.token, user_id: usuario.id});
           }) 
        })
    })
}

exports.postLogin = (req, res, next) => {
    passport.authenticate('local', (err, usuario, info) => {
        if (err) {
            next(err);
        }
        if (!usuario) {
            return res.status(400).send('Email o contaseña no validos');
        }
        req.login(usuario, (err) => {
            if(err) {
                next(err);
            }
            var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

            User.findById(usuario._id, function(err, user) {
                if (err)
                    res.send(err);
        
                user.token = token;  // update the users token
                // save the user
                user.save(function(err) {
                    if (err)
                        res.send(err);
                });
            });
            res.send({user_token: usuario.token, user_id: usuario.id});//mandar objeto con json web token y guardalo en la base de datos.
        })
    })(req, res, next);
}

exports.logout = (req, res) => {
    //req.logout();
    User.findById(req.params.user_id, function(err, user) {
        if (err)
            res.send(err);

        user.token = '';  // update the users token
        // save the user
        user.save(function(err) {
            if (err)
                res.send(err);
        });
    });
    res.send('Logout Exitoso'); //hacerle el update al usuario para eliminar el token 
}
