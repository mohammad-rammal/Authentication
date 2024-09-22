import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('token', token, {
        httpOnly: true, // Def vs XSS attack
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', // Def vs CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
    });

    return token;
};
