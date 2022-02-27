'use strict';
const express = require('express');
const routesignup = express.Router();

const { getDomain, postsignup, postsignIn, getUserInfo, postsignOut } = require('./controllersignup');

routesignup
    .route("/signup")
    .post(postsignup);

routesignup
    .route("/signin")
    .post(postsignIn);

routesignup
    .route("/domain")
    .get(getDomain);

routesignup
    .route("/userInfo")
    .post(getUserInfo);

routesignup
    .route("/logout")
    .post(postsignOut);
//code to post in db


module.exports = routesignup;