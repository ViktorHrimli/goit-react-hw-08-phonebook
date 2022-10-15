import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authIsLoginedSelector } from 'redux/auth/authSlice';
import PropTypes from 'prop-types';

export function PrivateRoute({ component: Component, redirect = '/' }) {
  const isLogged = useSelector(authIsLoginedSelector);
  return !isLogged ? <Navigate to={redirect} /> : Component;
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string.isRequired,
};
