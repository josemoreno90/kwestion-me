'use strict';

exports.__esModule = true;
exports.initState = undefined;

var _auth = require('../utils/auth');

var initState = exports.initState = {
  auth: { isAuthorised: (0, _auth.isAuthorised)() }
};

exports.default = initState;