// import { Navigate, useLocation } from 'react-router-dom';
// // import { Preloader } from '../preloader/preloader';
// // import { useAppSelector } from '../..';
// import { Preloader } from '../ui/preloader';
// import { useAppSelector } from 'src/services/store';

// type IProtected = {
//   onlyUnAuth?: boolean;
//   component: JSX.Element;
// };

// interface IOnlyUnAuth {
//   component: JSX.Element;
// }

// const ProtectedRouteElement = ({
//   onlyUnAuth,
//   component
// }: IProtected): JSX.Element => {
//   // const isAuthChecked = useAppSelector((store) => store.profile.isAuthChecked);
//   const isAuthChecked = useAppSelector(getIsAuthChecked);
//   const user = useAppSelector((store) => store.profile.userInfo);
//   const location = useLocation();

//   if (!isAuthChecked) {
//     return <Preloader />;
//   }

//   if (onlyUnAuth && user) {
//     const { from } = location.state || { from: { pathname: '/' } };
//     return <Navigate to={from} />;
//   }

//   if (!onlyUnAuth && !user) {
//     return <Navigate to='/login' state={{ from: location }} />;
//   }

//   return component;
// };

// export const OnlyAuth = ProtectedRouteElement;
// export const OnlyUnAuth = ({ component }: IOnlyUnAuth): JSX.Element => (
//   <ProtectedRouteElement onlyUnAuth component={component} />
// );
// ------------------
// import React, { ReactElement } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from '../../services/store';

// interface ProtectedRouteProps {
//     element: React.ReactElement;
//     requiresAuth: boolean;
// }

// export const ProtectedRoute = ({
//     element,
//     requiresAuth
// }: ProtectedRouteProps): ReactElement => {
//     const isAuthenticated = useSelector((state) => state.user.isAuthVerified);
//     const location = useLocation();

//     if (requiresAuth && !isAuthenticated) {
//         return <Navigate to='/login' state={{ from: location }} replace />;
//     }

//     if (!requiresAuth && isAuthenticated) {
//         const from = location.state?.from || '/';
//         return <Navigate to={from} replace />;
//     }

//     return element;
// };
