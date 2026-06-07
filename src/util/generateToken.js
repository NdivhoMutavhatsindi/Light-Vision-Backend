import jwt from 'jsonwebtoken';

const generateToken = (admin) => {
    return jwt.sign({
        admin_id: admin.admin_id,
        email: admin.email
     },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
    );
};

export default generateToken;