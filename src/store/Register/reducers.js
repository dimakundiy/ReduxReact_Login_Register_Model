import SET_REGISTER_PENDING from './actions';
import SET_REGISTER_SUCCESS from './actions';
import SET_REGISTER_ERROR from './actions';

export default function registerReducer(
    state = {
      isRegisterSuccess: false,
      isRegisterPending: false,
      registerError: null
    },
    action
  ) {
    switch (action.type) {
      case SET_REGISTER_PENDING:
        return Object.assign({}, state, {
            isRegisterPending: action.isRegisterPending
        });
  
      case SET_REGISTER_SUCCESS:
        return Object.assign({}, state, {
            isRegisterSuccess: action.isRegisterSuccess
        });
  
      case SET_REGISTER_ERROR:
        return Object.assign({}, state, {
            registerError: action.registerError
        });
  
      default:
        return state;
    }
  }
  