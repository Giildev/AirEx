const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String },
    phone: { type: String },
    password: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    token: { type: String }
  },
  {
    timestamps: true
  }
);

// UserSchema.pre("save", next => {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified("password")) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err);

//       // hash the password along with our new salt
//       bcrypt.hash(user.password, salt, function(err, hash) {
//           if (err) return next(err);

//           // override the cleartext password with the hashed one
//           user.password = hash;
//           next();
//       });
//   });
// });

// UserSchema.methods.comparePassword = (password, callback) => {
//   bcrypt.compare(password, this.password, (err, isMatch) => {
//     if (err) return callback(err);
//     callback(null, isMatch);
//   });
// };

module.exports = mongoose.model("User", UserSchema);
