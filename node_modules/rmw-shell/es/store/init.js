import { isAuthorised } from '../utils/auth';

export var initState = {
  auth: { isAuthorised: isAuthorised() }
};

export default initState;