import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin, getToken } from 'redux/auth/auth-selector';

import LoadingIndicator from 'shared/components/LoadingIndicator';

const PrivateRoute = () => {
  const isUserLogin = useSelector(isLogin);
  const isToken = useSelector(getToken);

  if (!isUserLogin && isToken) {
    return <LoadingIndicator width="70" height="70" />;
  }
  if (!isUserLogin && !isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
