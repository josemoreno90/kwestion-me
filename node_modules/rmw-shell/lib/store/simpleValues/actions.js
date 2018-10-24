'use strict';

exports.__esModule = true;
exports.setSimpleValue = setSimpleValue;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setSimpleValue(id, value) {
  return {
    type: types.ON_SIMPLE_VALUE_CHANGED,
    id: id,
    value: value
  };
}