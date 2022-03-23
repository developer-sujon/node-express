const jwt = require("jsonwebtoken");

const checkLogin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;
    req.username = username;
    req.userId = userId;
    next();
  } catch (error) {
    //next("Unauthorized Credential");
    res.status(401).json({ error: "Unauthorized Credential" });
  }
};

module.exports = checkLogin;
