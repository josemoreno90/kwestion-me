'use strict';

exports.__esModule = true;
exports.firebaseApp = undefined;

var _app = require('firebase/app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

require('firebase/auth');

require('firebase/database');

require('firebase/firestore');

require('firebase/messaging');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
//import firestore from 'firebase/firestore'
var firebaseApp = exports.firebaseApp = _app2.default.initializeApp(process.env.NODE_ENV !== 'production' ? _config2.default.firebase_config_dev : _config2.default.firebase_config);