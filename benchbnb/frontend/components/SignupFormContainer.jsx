
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapSTP = ({ errors }) => {
  return {
    formType: 'signup',
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDTP = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
