const jwt = require('jsonwebtoken')
const homeLayout= './layouts/main'
const jwtSecret = process.env.JWT_SECRET;
const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    console.log(token)
    if (!token) return res.render("unauthorized", { layout: homeLayout, currentRoute: req?.originalUrl, isUserLoggedIn: false });
    const decodedToken = jwt.verify(token, jwtSecret);
    console.log(decodedToken)
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    console.log(err)
    res.render("unauthorized", { layout: homeLayout, currentRoute: req?.originalUrl, isUserLoggedIn: false });
    // res.status(401).json({message: "Unauthorized"})
  }
};

module.exports = {
  authMiddleware,
};
