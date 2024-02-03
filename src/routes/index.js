// const express = require('express');
import express from 'express';
const router = express.Router();
// const v1Routes = require('./v1/index');
import v1Routes from './v1/index.js'

router.use('/v1', v1Routes);  //agr koi v route /v1 se start hoga tb use v1Routes link kr dege

// module.exports = router;
export default router;