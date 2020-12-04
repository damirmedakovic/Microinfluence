const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");



// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public


exports.register = async (req, res, next) => {

    const { name, email, password, role} = req.body;

    const user = await User.create({
        name, 
        email,
        password,
        role
    });

    sendTokenResponse(user, 200, res);


}


// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public


exports.login = async (req, res, next) => {

    const { email, password} = req.body;


    if(!email || !password) {

        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    const user = await User.findOne({email: email}).select("+password");


    if(!user) {

        return next(new ErrorResponse("Invalid credentials", 400));

    }

    const correctPassword = await user.matchPassword(password);

    if(!correctPassword) {

        return next(new ErrorResponse("Invalid credentials", 400));
    }



    sendTokenResponse(user, 200, res);

}


// Get token from model and create cookie + send response 

const sendTokenResponse = (user, statusCode, res) => {

    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 60 * 24 * 1000),
        httpOnly: true
    };

    if(process.env.NODE_ENV === 'production') {
        options.secure = true
    }

    res.status(statusCode).cookie("token", token, options).json({ success: true, token: token});


}