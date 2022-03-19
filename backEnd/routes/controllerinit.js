// const {mongodbService} = require('../common/MongodbService');
const {
  getRooms,
  postApi,
  getAPIByUsername,
  getAPIById,
  updateApiStatus,
  getAPIExceptionList,
  findByAPI_Name,
  generateOrder,
} = require('../services/apiinitservice');

//@desc get questions to find out API or not
//@route /init/v1/questions
//@access public

exports.getRooms = (req, res, next) => {
  getRooms(req, res, next);
};

exports.postApi = (req, res, next) => {
  postApi(req, res, next);
};

exports.getAPIByUsername = (req, res, next) => {
  getAPIByUsername(req, res, next);
};

exports.getAPIById = (req, res, next) => {
  getAPIById(req, res, next);
};

exports.updateApiStatus = (req, res, next) => {
  updateApiStatus(req, res, next);
};

exports.getAPIExceptionList = (req, res, next) => {
  getAPIExceptionList(req, res, next);
};

exports.findByAPI_Name = (req, res, next) => {
  findByAPI_Name(req, res, next);
};

exports.generateOrder = (req, res, next) => {
  generateOrder(req, res, next);
};
