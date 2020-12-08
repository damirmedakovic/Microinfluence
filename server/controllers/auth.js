const ErrorResponse = require("../utils/errorResponse");
const Company = require("../models/Company");



// @desc    Register company
// @route   POST /api/v1/auth/register
// @access  Public


exports.register = async (req, res, next) => {

    const { name, email, password, role} = req.body;

    const company = await Company.create({
        name, 
        email,
        password,
        role
    });

    sendTokenResponse(company, 200, res);


}


// @desc    Login company
// @route   POST /api/v1/auth/login
// @access  Public


exports.login = async (req, res, next) => {

    const { email, password} = req.body;


    if(!email || !password) {

        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    const company = await Company.findOne({email: email}).select("+password");


    if(!company) {

        return next(new ErrorResponse("Invalid credentials", 400));

    }

    const correctPassword = await company.matchPassword(password);

    if(!correctPassword) {

        return next(new ErrorResponse("Invalid credentials", 400));
    }



    sendTokenResponse(company, 200, res);

}


// Get token from model and create cookie + send response 

const sendTokenResponse = (company, statusCode, res) => {

    const token = company.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 60 * 24 * 1000),
        httpOnly: true
    };

    if(process.env.NODE_ENV === 'production') {
        options.secure = true
    }

    res.status(statusCode).cookie("token", token, options).json({ success: true, token: token});


}

// @desc    Get current logged in company
// @route   POST /api/v1/auth/me
// @access  Private

exports.getMe = async (req, res, next) => {

    res.status(200).json({ success: true, data: req.company})

}