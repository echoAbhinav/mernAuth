import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ success: false, message: "Unauthorized access. Login again." });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.userId = tokenDecode.id; 
            next();
        } else {
            return res.json({ success: false, message: "Unauthorized access. Login again." });
        }
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default userAuth;
