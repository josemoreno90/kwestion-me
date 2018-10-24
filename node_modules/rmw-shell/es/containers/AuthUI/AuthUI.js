function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';

var authUi = null;

export var AuthUI = function (_Component) {
  _inherits(AuthUI, _Component);

  function AuthUI() {
    _classCallCheck(this, AuthUI);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AuthUI.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        firebaseApp = _props.firebaseApp,
        uiConfig = _props.uiConfig;

    // let authUi = null

    try {
      if (!firebaseui.auth.AuthUI.getInstance()) {
        authUi = new firebaseui.auth.AuthUI(firebaseApp.auth());
      } else {
        // console.log(firebaseui.auth)
      }
    } catch (err) {
      console.warn(err);
    }

    authUi.start('#firebaseui-auth', uiConfig);
  };

  AuthUI.prototype.componentWillUnmount = function componentWillUnmount() {
    try {
      authUi.reset();
    } catch (err) {
      console.warn(err);
    }
  };

  AuthUI.prototype.render = function render() {
    return React.createElement(
      'div',
      { style: { paddingTop: 35 } },
      React.createElement('div', { id: 'firebaseui-auth' })
    );
  };

  return AuthUI;
}(Component);

export default AuthUI;