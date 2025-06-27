const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminLayout = './layouts/admin';
const jwtSecret = process.env.JWT_SECRET;

const showLoginForm = (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Admin Page with All the admin actions",
    };

    res.render("admin/index", { locals, layout: adminLayout, isUserLoggedIn: false });
  } catch (err) {}
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.render("unauthorized", { layout: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials." });
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: "User already in use." });
    }
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User Created", data: { user } });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: "User already in use." });
    }
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  showLoginForm,
};
