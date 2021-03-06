const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const cors = require('cors');

const whitelistedDomains = 'http://localhost:8080';

dotenv.config({ path: './config/config.env' });

const app = express();
// Load env config

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'asdqwer532aw39ftrr',
    resave: false,
    saveUninitialized: true,
  })
);

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelistedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

//const routeadmin = require('./routes/routeadmin');
const routeapiinit = require('./routes/routeapiinit');
const routesignup = require('./routes/routesignup');

//app.use('/admin/v1/', routeadmin);
app.use('/init/v1/', routeapiinit);
app.use('/signup/v1/', routesignup);

app.listen(port, function () {
  console.log(
    `Server running in ${process.env.NODE_ENV} started on port: ${process.env.PORT}`
  );
});
