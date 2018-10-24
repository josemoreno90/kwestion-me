import * as types from './types';

var locale = function locale() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  var action = arguments[1];


  switch (action.type) {
    case types.UPDATE_LOCALE:
      return action.locale;

    default:
      return state;
  }
};

export default locale;