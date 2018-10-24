'use strict';

exports.__esModule = true;
exports.AuthUI = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _firebaseui = require('firebaseui');

var firebaseui = _interopRequireWildcard(_firebaseui);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authUi = null;

var AuthUI = exports.AuthUI = function (_Component) {
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
    return _react2.default.createElement(
      'div',
      { style: { paddingTop: 35 } },
      _react2.default.createElement('div', { id: 'firebaseui-auth' })
    );
  };

  return AuthUI;
}(_react.Component);

exports.default = AuthUI;