import { useSelector } from 'react-redux';
import { authIsLoginedSelector } from 'redux/auth/authSlice';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublickRoute({ component: Component, redirect = '/' }) {
  const isLogged = useSelector(authIsLoginedSelector);
  return isLogged ? <Navigate to={redirect} /> : Component;
}

PublickRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string.isRequired,
};
