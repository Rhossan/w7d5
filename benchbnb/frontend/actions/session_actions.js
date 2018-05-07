import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch({
      type: RECEIVE_CURRENT_USER,
      user
    })
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch({
      type: RECEIVE_CURRENT_USER,
      user
    })
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);