import {User} from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import crypto from 'crypto';
import {generateVerificationCode} from '../utils/generateVerificationCode.js';
import {generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookie.js';
import {
    sendResetPasswordEmail,
    sendResetSuccessEmail,
    sendVerificationEmail,
    sendWelcomeEmail,
} from '../mailtrap/emails.js';

/********************************
 *  @desc    Register New User
 *  @route   /api/auth/register
 *  @method  POST
 *  @access  public
 *******************************/
export const signup = async (req, res) => {
    const {email, password, name} = req.body;

    try {
        if (!name || !password || !name) {
            throw new Error('All fields are required!');
        }

        const userAlreadyExists = await User.findOne({email});
        if (userAlreadyExists) {
            return res.status(400).json({success: false, message: 'User already exists!'});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = generateVerificationCode();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24h
        });

        //jwt
        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        await user.save();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

/********************************
 *  @desc    Verify New User
 *  @route   /api/auth/verify-email
 *  @method  POST
 *  @access  public
 *******************************/
export const verifyEmail = asyncHandler(async (req, res) => {
    const {code} = req.body;

    const user = await User.findOne({
        verificationToken: code,
        verificationTokenExpiresAt: {$gt: Date.now()},
    });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Invalid or expired verification code!',
        });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await sendWelcomeEmail(user.email, user.name);

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Email verified successfully',
        user: {
            ...user._doc,
            password: undefined,
        },
    });
});

/********************************
 *  @desc    Login User
 *  @route   /api/auth/login
 *  @method  POST
 *  @access  public
 *******************************/
export const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (!user) {
        return res.status(400).json({success: false, message: 'Invalid credentials!'});
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({success: false, message: 'Invalid credentials!'});
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(201).json({
        success: true,
        message: 'Logged in successfully',
        user: {
            ...user._doc,
            password: undefined,
        },
    });
});

/********************************
 *  @desc    Forgot Password
 *  @route   /api/auth/forgot-password
 *  @method  POST
 *  @access  public
 *******************************/
export const forgotPassword = asyncHandler(async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});
    if (!user) {
        return res.status(400).json({success: false, message: 'User not found!'});
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendResetPasswordEmail(user.email, user.name, resetURL);

    await user.save();

    res.status(201).json({
        success: true,
        message: 'Rest  successfully',
        user: {
            ...user._doc,
            password: undefined,
        },
    });
});

/********************************
 *  @desc    Reset Password
 *  @route   /api/auth/reset-password/:token
 *  @method  POST
 *  @access  public
 *******************************/
export const resetPassword = asyncHandler(async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;

    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: {$gt: Date.now()},
    });
    if (!user) {
        return res.status(400).json({success: false, message: 'Invalid or expired reset token!'});
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await sendResetSuccessEmail(user.email, user.name);

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Password rest successfully',
    });
});

/********************************
 *  @desc    Logout User
 *  @route   /api/auth/logout
 *  @method  POST
 *  @access  public
 *******************************/
export const logout = asyncHandler(async (req, res) => {
    res.clearCookie('token');

    res.status(200).json({
        success: true,
        message: 'Logged out successfully.',
    });
});

/********************************
 *  @desc    check Auth User
 *  @route   /api/auth/check-auth
 *  @method  GET
 *  @access  public
 *******************************/
export const checkAuth = asyncHandler(async (req, res) => {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
        return res.status(400).json({success: false, message: 'User not found!'});
    }
    res.status(201).json({
        success: true,
        user,
    });
});
