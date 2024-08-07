// const express = require('express');
import express from "express";
const router = express.Router();
// const {createTweet} = require('../../controllers/tweet-controller');
import { createTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signup, login } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

router.post("/tweets", authenticate, createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", authenticate, createComment);
router.post("/signup", signup);
router.post("/login", login);

// module.exports = router;
export default router;
