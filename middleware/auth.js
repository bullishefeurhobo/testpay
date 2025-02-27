const jwt = require("jsonwebtoken");

exports.authenticateAdmin = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied!" });

    try {
        const verified = jwt.verify(token, "SECRET_KEY");
        req.admin = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid token!" });
    }
};
