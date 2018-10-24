var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import IconButton from '@material-ui/core/IconButton';

var ToggleButton = function ToggleButton(props) {
  var input = props.input,
      checkedIcon = props.checkedIcon,
      uncheckedIcon = props.uncheckedIcon,
      rest = _objectWithoutProperties(props, ['input', 'checkedIcon', 'uncheckedIcon']);

  var value = input.value,
      onChange = input.onChange;

  var isToggled = value === true;

  return React.createElement(
    IconButton,
    _extends({ onClick: function onClick() {
        return onChange(!isToggled);
      } }, rest),
    isToggled && checkedIcon,
    !isToggled && uncheckedIcon
  );
};

export default ToggleButton;