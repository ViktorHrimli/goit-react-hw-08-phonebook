import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authIsLoginedSelector } from 'redux/auth/authSlice';

export function PrivateRoute({ component: Component, redirect = '/' }) {
  const isLogged = useSelector(authIsLoginedSelector);
  return !isLogged ? <Navigate to={redirect} /> : Component;
}
