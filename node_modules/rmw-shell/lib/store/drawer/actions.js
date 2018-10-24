'use strict';

exports.__esModule = true;
exports.setDrawerOpen = setDrawerOpen;
exports.setDrawerMobileOpen = setDrawerMobileOpen;
exports.setDrawerUseMinified = setDrawerUseMinified;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function setDrawerOpen(open) {
  return {
    type: types.ON_DRAWER_OPEN_CHANGED,
    open: open
  };
}

function setDrawerMobileOpen(mobileOpen) {
  return {
    type: types.ON_DRAWER_MOBILE_OPEN_CHANGED,
    mobileOpen: mobileOpen
  };
}

function setDrawerUseMinified(useMinified) {
  return {
    type: types.ON_DRAWER_USE_MINIFIED_CHANGED,
    useMinified: useMinified
  };
}

exports.default = { setDrawerMobileOpen: setDrawerMobileOpen, setDrawerOpen: setDrawerOpen, setDrawerUseMinified: setDrawerUseMinified };