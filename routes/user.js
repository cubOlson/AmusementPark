const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils')

router.get('/user/register', csrfProtection, asyncHandler(async (req, res) => {
    const user = db.User.build();
    res.render('user-register', { title: "Register", csrfToken: req.csrfToken() })
}));

router.post('/user/register', csrfProtection, asyncHandler(async (req, res) => {

}));