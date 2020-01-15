// ***** CRUD operations on node completed *****

const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ** This code below gets back all the POSTS **
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// ** Submits a POST **

router.post("/", async (req, res) => {
  // // TODO Testing  purpose only : console.log(req.body);
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

// // TODO create a specific posts

router.get("/:postId", async (req, res) => {
  // !! Testing purpose only =>> console.log(req.param.postId); !!

  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// // TODO Delete a specific post

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// // TODO Update / Patch part

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// ! Example that leads us to /login/dashboard route
// router.get("/dashboard", (req, res) => {
//   res.send("Dashboard Page !");
// });

module.exports = router;
