const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true, 
    },

    email: {
        type: String,
        unique: true,
        required: true,
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please add a valid email",
        ],
      },

      role: {
          type: String,
          enum: ["user", "publisher"],
          default: "user"
      },

      password: {
          type: String,
          required: true, 
          minlength: 6,
          select: false,
      },

      resetPasswordToken: String, 
      resetPasswordExpire: Date, 
      createdAt: {
          type: Date,
          default: Date.now 
      }, 


});


module.exports = mongoose.model("User", UserSchema);