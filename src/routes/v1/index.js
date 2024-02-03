// const express = require('express');
import express from 'express';
const router = express.Router();
// const {createTweet} = require('../../controllers/tweet-controller');
import { createTweet } from '../../controllers/tweet-controller.js';

router.post('/tweets',createTweet);

// module.exports = router;
export default router;