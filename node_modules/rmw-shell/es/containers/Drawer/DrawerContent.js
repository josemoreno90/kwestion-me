var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTheme, switchNightMode } from '../../store/themeSource/actions';
import { updateLocale } from '../../store/locale/actions';
import { DrawerContent } from '../../components/Drawer';
import { setDialogIsOpen } from '../../store/dialogs/actions';
import _isGranted, { isAnyGranted as _isAnyGranted } from '../../utils/auth';
import { userLogout } from '../../store/auth/actions';
import drawerActions from '../../store/drawer/actions';

DrawerContent.propTypes = {
  locale: PropTypes.string.isRequired,
  updateTheme: PropTypes.func.isRequired,
  updateLocale: PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _extends({
    isGranted: function isGranted(grant) {
      return _isGranted(state, grant);
    },
    isAnyGranted: function isAnyGranted(grants) {
      return _isAnyGranted(state, grants);
    }
  }, state);
};

export default connect(mapStateToProps, _extends({ updateTheme: updateTheme, switchNightMode: switchNightMode, updateLocale: updateLocale, setDialogIsOpen: setDialogIsOpen, userLogout: userLogout }, drawerActions))(DrawerContent);