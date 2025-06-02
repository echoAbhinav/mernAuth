import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.token; // ✅ Fix: get token from req.cookies.token

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized access. Login again." });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); // ✅ Ensure this matches your token signing

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
            next();
        } else {
            return res.status(401).json({ success: false, message: "Invalid token. Login again." });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: "Token verification failed: " + error.message });
    }
};

export default userAuth;
