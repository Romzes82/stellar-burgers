import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { getFeeds } from '../../services/slices/ordersSlice';
import { feeds } from '@thunks';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  // const orders: TOrder[] = [];

  const orders: TOrder[] = useAppSelector(getFeeds);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(feeds());
  }, [dispatch]);

  const handleGetFeed = useCallback(() => {
    dispatch(feeds());
  }, [dispatch]);

  if (!orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={handleGetFeed} />;
};
