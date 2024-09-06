import { FC, useEffect } from 'react';

import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
import { useAppDispatch, useAppSelector } from '../../services/store';
import {
  getFeeds,
  getTotal,
  getTotalToday
} from '../../services/slices/ordersSlice';
import { getIngredients } from '@thunks';

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 50);

export const FeedInfo: FC = () => {
  /** TODO: взять переменные из стора */
  // const orders: TOrder[] = [];
  // const feed = {};

  const orders: TOrder[] = useAppSelector(getFeeds);

  const feed = {
    total: useAppSelector(getTotal),
    totalToday: useAppSelector(getTotalToday)
  };

  console.log(feed);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
