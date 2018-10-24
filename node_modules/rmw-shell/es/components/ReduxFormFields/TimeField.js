var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import moment from 'moment';
import { TimePicker } from 'material-ui-pickers';

var TimeField = function TimeField(props) {
  var input = props.input,
      timeFormat = props.timeFormat,
      inputFormat = props.inputFormat,
      rest = _objectWithoutProperties(props, ['input', 'timeFormat', 'inputFormat']);

  var onChange = input.onChange,
      value = input.value;


  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(moment(value).format());
    }
  };

  var handleBlur = function handleBlur(e) {
    var value = e.target.value;
    if (inputFormat && value != null && value.length > 1) {
      onChange(moment(e.target.value, inputFormat).format());
    }
  };

  return React.createElement(TimePicker, _extends({
    value: value ? value : null,
    onChange: handleChange,
    onBlur: handleBlur,
    format: timeFormat
  }, rest));
};

TimeField.defaultProps = {
  ampm: false,
  keyboard: true,
  autoOk: true,
  keyboardIcon: 'access_time',
  disableOpenOnEnter: true,
  timeFormat: 'HH:mm',
  inputFormat: 'HH-mm'
};

export default TimeField;