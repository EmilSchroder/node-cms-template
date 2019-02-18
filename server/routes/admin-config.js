const express = require('express');
// const db = require('../db/db');
const router = express.Router();
const path = require('path')

router.use(express.json());
router.use(express.static(path.join(__dirname, '../public/login.html')))

module.exports = router;