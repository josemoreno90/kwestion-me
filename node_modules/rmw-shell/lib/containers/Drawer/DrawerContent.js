'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('../../store/themeSource/actions');

var _actions2 = require('../../store/locale/actions');

var _Drawer = require('../../components/Drawer');

var _actions3 = require('../../store/dialogs/actions');

var _auth = require('../../utils/auth');

var _auth2 = _interopRequireDefault(_auth);

var _actions4 = require('../../store/auth/actions');

var _actions5 = require('../../store/drawer/actions');

var _actions6 = _interopRequireDefault(_actions5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Drawer.DrawerContent.propTypes = {
  locale: _propTypes2.default.string.isRequired,
  updateTheme: _propTypes2.default.func.isRequired,
  updateLocale: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _extends({
    isGranted: function isGranted(grant) {
      return (0, _auth2.default)(state, grant);
    },
    isAnyGranted: function isAnyGranted(grants) {
      return (0, _auth.isAnyGranted)(state, grants);
    }
  }, state);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _extends({ updateTheme: _actions.updateTheme, switchNightMode: _actions.switchNightMode, updateLocale: _actions2.updateLocale, setDialogIsOpen: _actions3.setDialogIsOpen, userLogout: _actions4.userLogout }, _actions6.default))(_Drawer.DrawerContent);
module.exports = exports['default'];