import { useAppSelector, useAppDispatch } from '../../services/store';

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC, useEffect, useState } from 'react';
import { TIngredient } from '@utils-types';
import {
  // ingredientsSelector,
  getIngredientsSelector,
  getIngredientsFetch
} from 'src/services/slices/ingredientsSlice';
// import ingredientsSlice from 'src/services/slices/ingredientsSlice';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменную из стора */
  // const isIngredientsLoading = false;

  const [ingr, setIngr] = useState<Array<TIngredient>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // const isIngredientsLoading = false;
  const selectedingredients = useAppSelector(getIngredientsSelector);
  // **
  const stuff = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIngr(selectedingredients.ingredients);
    setLoading(selectedingredients.ingredientsFetchFailed);
    // console.log(dispatch(getIngredientsFetch()));
  }, [selectedingredients]);

  function handleFetchUser() {
    dispatch(getIngredientsFetch());
  }
  // const stuff = useSelector(
  //   ingredientsSlice.getSelectors().getIngredientsSelector
  // );
  // **
  // console.log(dispatch(ingredientsSlice.getSelectors().getIngredientsSelector));

  // {isIngredientsLoading ? (
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <button className='btn' onClick={() => handleFetchUser}>
            Fetch
          </button>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
