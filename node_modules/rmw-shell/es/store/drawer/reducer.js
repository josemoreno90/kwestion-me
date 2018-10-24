var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import * as types from './types';

var initialState = {
  mobileOpen: false,
  open: false,
  useMinified: false
};

export default function drawer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.ON_DRAWER_OPEN_CHANGED:
      return _extends({}, state, { open: action.open, useMinified: true });
    case types.ON_DRAWER_MOBILE_OPEN_CHANGED:
      return _extends({}, state, { mobileOpen: action.mobileOpen });
    case types.ON_DRAWER_USE_MINIFIED_CHANGED:
      return _extends({}, state, { useMinified: action.useMinified, open: false });
    default:
      return state;
  }
}