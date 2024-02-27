// const express = require('express');
import express from 'express';
const router = express.Router();
// const {createTweet} = require('../../controllers/tweet-controller');
import { createTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup } from '../../controllers/auth-controller.js';

router.post('/tweets',createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signup);

// module.exports = router;
export default router;