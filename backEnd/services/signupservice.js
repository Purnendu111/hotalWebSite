const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { mongodbService } = require('../common/MongodbService');
const { v4: uuidv4 } = require('uuid');
var uid = uuidv4();

const signSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    fullname: {
        type: String,
    },
    username: {
        type: String,
    },
    domain: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    }

}, { versionKey: false });

const domain = new mongoose.Schema({
    domainshortname: String,
    domainname: String
}, { collection: 'domain' });



exports.postsignIn = (req, res) => {
    mongodbService((dbc) => {
        console.log("Got the connection");
        var user = mongoose.model('users', signSchema);
        var email = req.body.email;
        var pass = req.body.password;
        user.findOne({ email: email }, function(err, data) {
            if (err) {
                return res.status(500).json({
                    title: "Server Error",
                    error: err
                });
            }
            if (!data) {
                return res.status(401).json({
                    title: "User not found",
                    error: "Invalid Email"
                });
            }

            if (!bcrypt.compareSync(pass, data.password)) {
                return res.status(401).json({
                    title: "User not found",
                    error: "Invalid Password"
                });
            }

            let token = jwt.sign({ userId: data._id }, 'tokensecratkey')
            const options = { new: true };
            let query = { "_id": data._id };
            var update = {
                "$set": {
                    "token": token
                }
            };
            user.findOneAndUpdate(query, update, options)
                .then(updatedDocument => {
                    return res.status(200).json({
                        title: "LogedIn Success",
                        token: token
                    });
                })
                .catch(err => console.error(`Failed to find and update document: ${err}`))

        })
    }, () => {
        console.log("connection failed...");
    });
}

exports.postsignOut = (req, res) => {
    mongodbService((dbc) => {
        console.log("Got the connection");
        var user = mongoose.model('users', signSchema);
        var token = req.body.token;
        jwt.verify(token, 'tokensecratkey', (err, data) => {
            if (err) return res.status(401).json({
                title: 'unauthorized'
            })
            const options = { new: true };
            let query = { "_id": data.userId };
            var update = {
                "$set": {
                    "token": ""
                }
            };
            user.findOneAndUpdate(query, update, options)
                .then(updatedDocument => {
                    return res.status(200).json({
                        title: "LogedOut Success"
                    });
                })
        });
    }, () => {
        console.log("connection failed...");
    });
}

exports.postsignup = (req, res, next) => {
    mongodbService((dbc) => {
        console.log("Got the connection");
        var user = mongoose.model('users', signSchema);
        var usersList = new user({
            _id: uid,
            fullname: req.body.fullname,
            username: req.body.username,
            domain: req.body.domain,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            token: ''
        })
        usersList.save(err => {
            if (err) {
                return res.status(400).json({
                    title: "error",
                    error: "Email in use"
                });
            }
            return res.status(200).json({
                title: "Signup Success",
            });
        })
    }, () => {
        console.log("connection failed...");
    });
}


exports.getDomain = (req, res, next) => {
    mongodbService((dbc) => {
        console.log("Got the connection");
        var domainList = mongoose.model('domain', domain);
        domainList.find({}, { domainshortname: 1, domainname: 1 }, (err, data) => {
            res.json(data);
        });
    }, () => {
        console.log("connection failed...");
    });
}

exports.getUserInfo = (req, res, next) => {
    mongodbService((dbc) => {
        console.log("Got the connection");
        var user = mongoose.model('users', signSchema);
        var token = req.body.token;
        jwt.verify(token, 'tokensecratkey', (err, data) => {
            if (err) {
                return res.status(401).json({
                    title: 'Unauthorized User',
                    "msg": "Unauthorized User"
                })
            } else {
                user.findOne({ _id: data.userId }, (err, success) => {
                    if (err) return console.log(err);
                    return res.status(200).json({
                        title: 'Authorized User',
                        "msg": "Authorized User",
                        "data": success
                    });
                })
            }

        })
    }, () => {
        console.log("connection failed...");
    });
}