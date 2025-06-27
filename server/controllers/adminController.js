const Post = require("../models/Post");
const adminLayout = "./layouts/admin";

const getDashboard = async (req, res) => {
  try {
    const locals = {
      title: "Dashboard",
      description: "Dashboard page of the application",
    };
    const data = await Post.find();
    res.render("admin/dashboard", {
      locals,
      data,
      layout: adminLayout,
      isUserLoggedIn: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const showCreatePostForm = (req, res) => {
  res.render("admin/add-post", {
    locals: {
      title: "Add Post",
      description: "Create new post",
    },
    layout: adminLayout,
    isUserLoggedIn: true,
  });
};

const showEditPostForm = async (req, res) => {
  try {
    const id = req.params.postId;
    const data = await Post.findById({ _id: id });
    const locals = {
      title: `Edit ${data.title}`,
      description: `Update the post with id ${data._id}`,
    };
    res.render("admin/edit-post", {
      locals,
      data,
      layout: adminLayout,
      isUserLoggedIn: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = new Post({ title, body });
    await Post.create(newPost);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

const updatedPost = async (req, res) => {
  try {
    const id = req.params.postId;
    const { title, body } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { title, body },
      {
        new: true,
      }
    );
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (req, res) => {
  const id = req.params.postId;
  await Post.findByIdAndDelete(id);
  res.redirect("/dashboard");
};

module.exports = {
  getDashboard,
  createPost,
  updatedPost,
  deletePost,
  showCreatePostForm,
  showEditPostForm,
};
