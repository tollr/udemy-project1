import * as AuthActions from './auth.actions';
import {SIGNUP} from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
 token: null,
 authenticated: false
};

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SIGNUP:
      case
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.SIGNIN:
      return {

      };
    case SIGNUP:
      return {

      };
  }

  return state;
}

