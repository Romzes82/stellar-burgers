import { FC, useEffect, useMemo, useState } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient, TOrder } from '@utils-types';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { getFeeds, getOrderModalData } from '../../services/slices/ordersSlice';
import { getAllIngredients } from '../../services/slices/ingredientsSlice';
import { orderByNumber } from '@thunks';

export const OrderInfo: FC = () => {
  /** TODO: взять переменные orderData и ingredients из стора */
  // const orderData = {
  //   createdAt: '',
  //   ingredients: [],
  //   _id: '',
  //   status: '',
  //   name: '',
  //   updatedAt: 'string',
  //   number: 0
  // };

  // const ingredients: TIngredient[] = [];

  const params = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getFeeds);
  const [stateOrder, setStateOrder] = useState<TOrder | null>(null);
  const ingredients: TIngredient[] = useAppSelector(getAllIngredients);
  const orderId = Number(params.number);
  const orderModalData: TOrder = useAppSelector(getOrderModalData)[0];

  useEffect(() => {
    const order: TOrder | undefined = data.find(
      (elem) => elem.number === orderId
    );
    if (order) {
      setStateOrder(order);
    } else {
      dispatch(orderByNumber(orderId));
      setStateOrder(orderModalData);
    }
  }, [dispatch, orderModalData, orderId]);

  /* Готовим данные для отображения */
  const orderInfo = useMemo(() => {
    if (!stateOrder || !ingredients.length) return null;

    const date = new Date(stateOrder.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = stateOrder.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...stateOrder,
      ingredientsInfo,
      date,
      total
    };
  }, [stateOrder, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
