const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// * This code below gets backk all the POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// ** Submits a POST

router.post("/", async (req, res) => {
  // TODO Testing  purpose only : console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// TODO create a specific posts

// ! Example that leads us to /login/dashboard route
// router.get("/dashboard", (req, res) => {
//   res.send("Dashboard Page !");
// });

module.exports = router;
