import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // store = configureStore();
  const root = document.getElementById('root');

  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
