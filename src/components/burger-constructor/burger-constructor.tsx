import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/slices/userSlice';
import {
  clearIngredients,
  getConstructorItems
} from '../../services/slices/constructorSlice';
import { orderBurger } from '@thunks';
import {
  getLoading,
  getOrder,
  resetOrder
} from '../../services/slices/ordersSlice';

export const BurgerConstructor: FC = () => {
  const user = useAppSelector(getUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const constructorItems = useAppSelector(getConstructorItems);
  const orderRequest = useAppSelector(getLoading);
  const orderModalData = useAppSelector(getOrder);

  const itemIds: string[] = [
    ...constructorItems.ingredients.map((element) => element._id),
    constructorItems.bun?._id
  ].filter((id): id is string => id !== undefined);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!user) {
      navigate('/login', { replace: true, state: { from: location } });
      return;
    }
    dispatch(orderBurger(itemIds));
  };
  const closeOrderModal = () => {
    dispatch(clearIngredients());
    dispatch(resetOrder());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
