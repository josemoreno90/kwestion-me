var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import IconButton from '@material-ui/core/IconButton';

var ActionToggleButton = function ActionToggleButton(props) {
  var isToggled = props.isToggled,
      getIcon = props.getIcon,
      _onClick = props.onClick,
      input = props.input,
      rest = _objectWithoutProperties(props, ['isToggled', 'getIcon', 'onClick', 'input']);

  var value = input.value;

  var checked = isToggled(value);

  return React.createElement(
    IconButton,
    _extends({ onClick: function onClick() {
        return _onClick(checked);
      } }, rest),
    getIcon(checked)
  );
};

export default ActionToggleButton;