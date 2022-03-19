'use strict';
const express = require('express');
const routeapiinit = express.Router();

const {
  getRooms,
  postApi,
  getAPIExceptionList,
  getAPIByUsername,
  getAPIById,
  updateApiStatus,
  findByAPI_Name,
  generateOrder,
} = require('./controllerinit');

routeapiinit.route('/getRooms').get(getRooms);

routeapiinit.route('/apiinit').post(postApi);

routeapiinit.route('/getAPIByUsername').post(getAPIByUsername);

routeapiinit.route('/getAPIById').post(getAPIById);

routeapiinit.route('/updateApiStatus').post(updateApiStatus);

routeapiinit.route('/getAPIExceptionList').get(getAPIExceptionList);

routeapiinit.route('/findByAPI_Name').post(findByAPI_Name);

routeapiinit.route('/generateOrder').post(generateOrder);

module.exports = routeapiinit;
