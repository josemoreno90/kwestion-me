'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ToggleButton = function ToggleButton(props) {
  var input = props.input,
      checkedIcon = props.checkedIcon,
      uncheckedIcon = props.uncheckedIcon,
      rest = _objectWithoutProperties(props, ['input', 'checkedIcon', 'uncheckedIcon']);

  var value = input.value,
      onChange = input.onChange;

  var isToggled = value === true;

  return _react2.default.createElement(
    _IconButton2.default,
    _extends({ onClick: function onClick() {
        return onChange(!isToggled);
      } }, rest),
    isToggled && checkedIcon,
    !isToggled && uncheckedIcon
  );
};

exports.default = ToggleButton;
module.exports = exports['default'];