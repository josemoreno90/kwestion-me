'use strict';

exports.__esModule = true;
exports.LoadingComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    container: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    loader: {
      animation: 'spin infinite 20s linear',
      height: '80px'
    }
  };
};

var LoadingComponent = exports.LoadingComponent = function LoadingComponent(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return _react2.default.createElement(
        'div',
        null,
        'Loader timed out!'
      );
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay. <img src="/logo.svg" className="loader" alt="logo" />
      return _react2.default.createElement(
        'div',
        { className: props.classes.container },
        _react2.default.createElement('img', { src: '/logo.svg', className: props.classes.loader, alt: 'logo' })
      );
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (props.error) {
    console.warn(props.error);

    // Reload page on first failed load
    if (window.location.href.indexOf('isReload') === -1) {
      window.location.href = window.location.href + '?isReload=1';
    } else {
      window.location.href = window.location.href + '&isReload=1';
    }

    // If we aren't loading, maybe
    return _react2.default.createElement(
      'div',
      null,
      'Error! Component failed to load'
    );
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  }
};

exports.default = (0, _redux.compose)((0, _styles.withStyles)(styles, { withTheme: true }))(LoadingComponent);