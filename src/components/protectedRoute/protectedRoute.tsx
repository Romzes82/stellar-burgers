import { Preloader } from '@ui';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuthChecked, getUser } from '../../services/slices/userSlice';
import { useAppSelector } from '../../services/store';

type TProtectedProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({ onlyUnAuth, children }: TProtectedProps) => {
  const isAuthChecked = useAppSelector(getIsAuthChecked);
  const user = useAppSelector(getUser);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Preloader />;
  }

  console.log(`onlyUnAuth - ${onlyUnAuth}  ,  name - ${user?.name}`);

  if (!onlyUnAuth && !user) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  }

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  return children;
};
