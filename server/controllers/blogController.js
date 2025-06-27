const Post = require("../models/Post");

const getHomePage = async (req, res) => {
  try {
    const locals = {
      title: "NodeJS Blog",
      description: "Simple Blog created with NodeJS, Express, and MongoDB",
    };
    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);
    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: "/",
    });
  } catch (err) {
    console.log(err);
  }
};

const getAboutPage = (req, res) => {
  res.render("about", { currentRoute: "/about" });
};

const getContactPage = (req, res) => {
  res.render("contact", { currentRoute: "/contact" });
};

const searchPosts = async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "Search the site...",
    };
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
    locals.searchTerm = searchTerm;
    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    locals.data = data;
    console.log(data, "result data", searchNoSpecialChar);
    res.render("search-results", {
      data,
      locals,
      searchTerm,
      searchResults: data,
      currentRoute: "/search",
    });
  } catch (err) {
    console.log(err);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.postId;
    const data = await Post.findById({ _id: id });
    const locals = {
      title: data.title,
      description: data.body,
    };
    res.render("post", { data, locals, currentRoute: `/post/${id}` });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getHomePage,
  getPostById,
  searchPosts,
  getAboutPage,
  getContactPage,
};
