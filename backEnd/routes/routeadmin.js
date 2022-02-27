'use strict';
const express = require('express');
const routeadmin = express.Router();

const { getQuestions } = require('./controller');

routeadmin
    .route("/questions")
    .get(getQuestions);

module.exports = routeadmin;