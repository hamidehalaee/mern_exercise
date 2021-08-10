const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
       type: String,
       unique: true,
       required: true,
       trim: true,//white space at the end
       minlength: 3
       },
    // password: {
    //   type: String,
    //   unique: true,
    //   required: true,
    //   trim: true,//white space at the end
    //   minlength: 3
    // }
  },
   {
    timestamps: true,
  });


// userSchema.pre('save', async function(next) {
//     this.password =
//       await bcrypt.hash(this.password, await bcrypt.genSalt(10));
//     next();
//   });

//   userSchema.pre('update', async function(next) {
//     if (this._update.password) {
//       this._update.password =
//         await bcrypt.hash(this._update.password, await bcrypt.genSalt(10));
//       next();
//     } else {
//       next();
//     }
//   });
  
  const UserModel = mongoose.model('user', userSchema);
  
  module.exports = UserModel;