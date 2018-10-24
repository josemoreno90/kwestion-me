'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Drawer = require('../../components/Drawer');

var _actions = require('../../store/dialogs/actions');

var _actions2 = require('../../store/drawer/actions');

var _actions3 = _interopRequireDefault(_actions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Drawer.DrawerHeader.propTypes = {
  auth: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  var auth = state.auth,
      locale = state.locale,
      dialogs = state.dialogs,
      drawer = state.drawer;


  return {
    auth: auth,
    locale: locale,
    dialogs: dialogs,
    drawer: drawer
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _extends({ setDialogIsOpen: _actions.setDialogIsOpen }, _actions3.default))(_Drawer.DrawerHeader);
module.exports = exports['default'];