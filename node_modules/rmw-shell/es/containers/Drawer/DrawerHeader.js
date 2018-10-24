var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerHeader } from '../../components/Drawer';
import { setDialogIsOpen } from '../../store/dialogs/actions';
import drawerActions from '../../store/drawer/actions';

DrawerHeader.propTypes = {
  auth: PropTypes.object
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

export default connect(mapStateToProps, _extends({ setDialogIsOpen: setDialogIsOpen }, drawerActions))(DrawerHeader);