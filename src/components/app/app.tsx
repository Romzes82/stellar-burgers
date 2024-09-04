import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo, IngredientDetails } from '@components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/store';
import { useEffect } from 'react';
// import { getIngredients } from '../../services/asyncThunks/ingredientsThunk';
import { getIngredients } from '@thunks';
// import { getIngredients } from 'src/services/asyncThunks/ingredientsThunk'; ошибка пути
// import { getAllIngredients } from '../../services/slices/ingredientsSlice';

// const closeModal = () => {};

const App = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const closeModal = () => {
    navigate(-1);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getIngredients());
    // dispatch(checkUserAuth());
  }, [dispatch]);

  const location = useLocation();
  console.log(location);
  const backgroundLocation = location.state?.background;
  console.log('backgroundLocation - ' + backgroundLocation);

  return (
    <>
      <div className={styles.app}>
        <AppHeader />

        <Routes location={backgroundLocation || location}>
          <Route path='/' element={<ConstructorPage />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/orders' element={<ProfileOrders />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>

        {/* Show the modal when a `backgroundLocation` is set */}
        {/* {state?.backgroundLocation && (
      <Routes>
        <Route path="/img/:id" element={<Modal />} />
      </Routes>
    )} */}

        {/* <Routes>
        <Route
          path='/feed/:number'
          element={
            <Modal
              title={''}
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
            >
              <OrderInfo />
            </Modal>
          }
        />
        <Route
          path='/ingredients/:id'
          element={
            <Modal
              title={''}
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
            >
              <IngredientDetails />
            </Modal>
          }
        />
        <Route
          path='/profile/orders/:number'
          element={
            <Modal
              title={''}
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
            >
              <OrderInfo />
            </Modal>
          }
        />
      </Routes> */}
      </div>
    </>
  );
};

export default App;
