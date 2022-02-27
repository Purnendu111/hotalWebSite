const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const jwt = require('jsonwebtoken');

const { mongodbService } = require('../common/MongodbService');

const roomDataCollection = new mongoose.Schema(
  {
    roomName: String,
    roomSize: String,
    isRoomFree: String,
    RoomPic: Array,
  },
  { collection: 'roomDataCollection' }
);

const apiInit = new mongoose.Schema(
  {
    _id: String,
    api_name: {
      type: String,
    },
    domain: String,
    questionRes: { type: Array },
    desc: String,
    status: String,
    userId: String,
    exceptionDesc: String,
    exceptionApproveBy: String,
    save_time: String,
    update_time: String,
    isDeleted: String,
  },
  { versionKey: false }
);

exports.getRooms = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      var roomList = mongoose.model('roomDataCollection', roomDataCollection);
      roomList.find({}, (err, success) => {
        res.json(success);
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

const date = () => {
  let date_ob = new Date();
  let date = ('0' + date_ob.getDate()).slice(-2);
  let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  let time =
    year +
    '-' +
    month +
    '-' +
    date +
    ' ' +
    hours +
    ':' +
    minutes +
    ':' +
    seconds;
  return time;
};

exports.postApi = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      let time = date();
      let quesRes = req.body.questionRes;
      var token = req.body.token;
      var ansList = mongoose.model('questions', questions);
      var apiData = mongoose.model('apiCatalog', apiInit);
      var uid = uuidv4();
      jwt.verify(token, 'tokensecratkey', (err, data) => {
        if (err)
          return res.status(401).json({
            title: 'unauthorized',
          });
        var userId = data.userId;
        var apiInitList = new apiData({
          _id: uid,
          api_name: req.body.api_name,
          domain: req.body.domain,
          desc: req.body.desc,
          questionRes: req.body.questionRes,
          status: '',
          save_time: time,
          isDeleted: 0,
          userId: userId,
        });

        apiInitList
          .save()
          .then((result) => {
            let count = 0;
            ansList.find(
              {},
              { ans: 1 },
              (err, data) => {
                for (var i = 0; i < data.length; i++) {
                  var obj = JSON.parse(JSON.stringify(data[i]));
                  var key = 0;
                  var ans = obj.ans;
                  var idVal = obj._id.valueOf();
                  for (key = 0; key < quesRes.length; key++) {
                    objD = quesRes[key];
                    if (objD.hasOwnProperty(idVal)) {
                      if (objD[idVal] == ans) {
                        count = count + 1;
                      }
                    }
                  }
                }
                let query = { _id: result._id };
                let update = '';
                if (count <= 6) {
                  update = {
                    $set: {
                      status: 'er',
                    },
                  };
                } else {
                  update = {
                    $set: {
                      status: 'su',
                    },
                  };
                }
                const options = { returnNewDocument: true };
                apiData
                  .findOneAndUpdate(query, update, options)
                  .then((updatedDocument) => {
                    if (count <= 6) {
                      return res.status(200).json({
                        msg: 'Not an API',
                        id: updatedDocument._id,
                        score: count,
                      });
                    } else {
                      return res.status(200).json({
                        msg: 'An API',
                        id: updatedDocument._id,
                        score: count,
                      });
                    }
                  })
                  .catch((err) =>
                    console.error(`Failed to find and update document: ${err}`)
                  );
              },
              { ans: 1 }
            );
          })
          .catch((err) => {
            // res.send("Error")
            console.log(err);
          });
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

exports.updateApiStatus = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      let time = date();
      var status = req.body.status;
      var token = req.body.token;
      var callFrom = req.body.callFrom;
      jwt.verify(token, 'tokensecratkey', (err, data) => {
        if (err)
          return res.status(401).json({
            title: 'unauthorized',
          });
        var apiData = mongoose.model('apiCatalog', apiInit);
        let query = { _id: req.body.qId };
        let update = '';
        if (callFrom == 'applyException') {
          update = {
            $set: {
              status: status,
              exceptionDesc: req.body.exceptionDesc,
              update_time: time,
            },
          };
        } else if (callFrom == 'deleteData') {
          update = {
            $set: {
              isDeleted: 1,
              update_time: time,
            },
          };
        } else {
          update = {
            $set: {
              status: status,
              exceptionApproveBy: data.userId,
              update_time: time,
            },
          };
        }
        const options = { returnNewDocument: true };
        apiData
          .findOneAndUpdate(query, update, options)
          .then((updatedDocument) => {
            return res.status(200).json({
              msg: 'Data Updated Successfully',
              id: updatedDocument._id,
            });
          })
          .catch((err) =>
            console.error(`Failed to find and update document: ${err}`)
          );
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

exports.getAPIByUsername = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      var apiData = mongoose.model('apiCatalog', apiInit);
      var token = req.body.token;
      jwt.verify(token, 'tokensecratkey', (err, data) => {
        if (err)
          return res.status(401).json({
            title: 'unauthorized',
          });
        apiData.find(
          { userId: data.userId, isDeleted: 0 },
          { questionRes: 0 },
          (err, success) => {
            if (err) return console.log(err);
            res.json(success);
          }
        );
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

exports.getAPIById = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      var apiData = mongoose.model('apiCatalog', apiInit);
      var id = req.body.id;
      apiData.findOne({ _id: id }, { questionRes: 0 }, (err, success) => {
        if (err) return console.log(err);
        res.json(success);
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

exports.getAPIExceptionList = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      var apiData = mongoose.model('apiCatalog', apiInit);
      var token = req.body.token;
      apiData.find({ status: 'ex' }, (err, success) => {
        if (err) return console.log(err);
        res.json(success);
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};

exports.findByAPI_Name = (req, res, next) => {
  mongodbService(
    (dbc) => {
      console.log('Got the connection');
      var apiData = mongoose.model('apiCatalog', apiInit);
      var apiName = req.body.api_name;
      apiData.find({ api_name: apiName }, (err, success) => {
        if (err)
          return res.status(401).json({
            title: 'Somthing went wrong',
          });
        return res.status(200).json({
          msg: 'API name already exist',
          data: success,
        });
      });
    },
    () => {
      console.log('connection failed...');
    }
  );
};
