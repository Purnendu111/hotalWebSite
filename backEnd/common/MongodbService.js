const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
// mongodb+srv://HotelManage:<password>@cluster0.d6eox.mongodb.net/HotelManage ?retryWrites=true&w=majority
const uri =
  'mongodb+srv://HotelManage:test@cluster0.d6eox.mongodb.net/hotel?retryWrites=true&w=majority';

var dbConnection = undefined;

exports.mongodbService = (cb, err) => {
  if (dbConnection != undefined) {
    console.log('Using existing connection...');
    cb(dbConnection);
  } else {
    try {
      // Connect to the MongoDB cluster
      mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((dbCon) => {
          console.log('Returning new collection...');
          dbConnection = dbCon;
          cb(dbConnection);
        });
    } catch (e) {
      console.log('could not connect');
      dbConnection = undefined;
    }
  }
};
