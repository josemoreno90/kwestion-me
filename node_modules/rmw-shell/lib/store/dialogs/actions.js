'use strict';

exports.__esModule = true;
exports.setDialogIsOpen = setDialogIsOpen;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setDialogIsOpen(id, isOpen) {
  return {
    type: types.ON_DIALOG_OPEN_CHANGED,
    id: id,
    isOpen: isOpen
  };
}