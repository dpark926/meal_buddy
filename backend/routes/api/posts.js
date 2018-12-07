const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const validatePostInput = require("../../validation/post");

// @route   GET api/post/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

// @route   POST api/post
// @desc    Create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    console.log(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
