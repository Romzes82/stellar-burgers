import {
  useAppSelector,
  useAppDispatch,
  RootState
} from '../../services/store';

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC, useEffect, useState } from 'react';
import { TIngredient } from '@utils-types';
// import {
//   getIngredientsFetch,
//   getIngredientsSelector
// } from 'src/services/slices/ingredientsSlice';
import { useSelector } from 'react-redux';
import { getIngredientsLoading } from '../../services/slices/ingredientsSlice';
// import {
//   // ingredientsSelector,
//   // getIngredientsSelector,
//   getIngredientsFetch
// } from 'src/services/slices/ingredientsSlice';
// import { getIngredientsApi } from '@api';
// import ingredientsSlice from 'src/services/slices/ingredientsSlice';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменную из стора */
  // const isIngredientsLoading = false;

  // const [ingr, setIngr] = useState<Array<TIngredient>>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);
  // const isIngredientsLoading = false;
  // const selectedingredients = useAppSelector((store) => store);
  // const selectedingredients = useAppSelector(getIngredientsFetch);
  // const link = useAppSelector(getIngredientsSelector);
  // const tracks = useSelector<RootState, boolean>(getIngredientsSelector);
  // **
  // const stuff = useAppSelector((store) => store);
  // const dispatch = useAppDispatch();
  // const isIngredientsLoading = useAppSelector(
  //   (state: RootState) => state.ingredientsR.ingredientsFetchFailed
  // );

  // const ingredients = useAppSelector(
  //   (state: RootState) => state.ingredientsR.ingredients
  // );

  // useEffect(() => {
  //   dispatch(getIngredientsFetch());
  // }, []);

  // useEffect(() => {
  //   setIngr(selectedingredients.ingredients);
  //   setLoading(selectedingredients.ingredientsFetchFailed);
  //   // console.log(dispatch(getIngredientsFetch()));
  // }, [selectedingredients]);

  // function handleFetchUser() {
  //   console.log(ingredients);
  // }

  // async function fetch() {
  //   try {
  //     const data = await getIngredientsApi();
  //     return data;
  //   } catch (error) {
  //     throw new Error((error as { message: string }).message);
  //   }
  // }

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   getProducts().then((products) => {
  //     dispatch(receivedProducts(products))
  //   })
  // })

  // const stuff = useSelector(
  //   ingredientsSlice.getSelectors().getIngredientsSelector
  // );
  // **
  // console.log(dispatch(ingredientsSlice.getSelectors().getIngredientsSelector));

  // {isIngredientsLoading ? (

  // const isIngredientsLoading = useAppSelector<boolean>(getIngredientsLoading);
  const isIngredientsLoading = useAppSelector(
    (state) => state.ingredientsReducer.loading
  );

  return (
    <>
      {!isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          {/* <button className='btn' onClick={() => handleFetchUser}>
          Fetch
        </button> */}
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
