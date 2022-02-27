// const {mongodbService} = require('../common/MongodbService');
const { getDomain, postsignup, postsignIn, getUserInfo, postsignOut } = require("../services/signupservice");

//@desc get questions to find out API or not
//@route /init/v1/questions
//@access public

exports.getDomain = (req, res, next) => {
    getDomain(req, res, next);
}

exports.postsignup = (req, res, next) => {
    postsignup(req, res, next);
}

exports.postsignIn = (req, res, next) => {
    postsignIn(req, res, next);
}

exports.postsignOut = (req, res, next) => {
    postsignOut(req, res, next);
}

exports.getUserInfo = (req, res, next) => {
    getUserInfo(req, res, next);
}