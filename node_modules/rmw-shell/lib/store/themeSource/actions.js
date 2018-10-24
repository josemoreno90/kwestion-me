'use strict';

exports.__esModule = true;
exports.updateTheme = updateTheme;
exports.switchNightMode = switchNightMode;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function updateTheme(theme) {
  return {
    type: types.UPDATE_THEME,
    theme: theme
  };
}

function switchNightMode(isNightModeOn) {
  return {
    type: types.SWITCH_NIGHT_MODE,
    isNightModeOn: isNightModeOn
  };
}