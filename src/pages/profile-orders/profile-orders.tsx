import { ProfileOrdersUI } from '@ui-pages';
import { TIngredient, TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { getProfileOrders } from '../../services/slices/ordersSlice';
import { getAllIngredients } from '../../services/slices/ingredientsSlice';
import { orders as ordersAction } from '../../services/asyncThunks/ordersThunk';
import { getIngredients } from '@thunks';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  // const orders: TOrder[] = [];

  const orders: TOrder[] = useAppSelector(getProfileOrders);

  const ingredients: TIngredient[] = useAppSelector(getAllIngredients);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(getIngredients());
    }
    dispatch(ordersAction());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
