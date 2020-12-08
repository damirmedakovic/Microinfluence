const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CompanySchema = new mongoose.Schema({

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
          enum: ["creator", "company"],
          default: "company"
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



CompanySchema.pre("save", async function(next) {

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);


});


CompanySchema.methods.getSignedJwtToken = function() {


    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });


}


CompanySchema.methods.matchPassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password);
}



module.exports = mongoose.model("Company", CompanySchema);