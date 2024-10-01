import { expect, describe } from '@jest/globals';
import { getIngredients } from '@thunks';
// import { getIngredients } from '../../asyncThunks/index';
import { ingredientsSlice, TIngredientsState } from '../ingredientsSlice';

describe('Jest test ingredientsSlice', () => {
  const initialState: TIngredientsState = {
    loading: false,
    ingredients: [],
    error: undefined
  };

  it('should done getIngredients action', async () => {
    const testIngredientsData = [
      {
        _id: '643d69a5c3f7b9001cfa093c',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
      }
    ];

    const actionPending = {
      type: getIngredients.pending.type
    };

    const resultPending = ingredientsSlice.reducer(initialState, actionPending);
    const actualPending = {
      ...initialState,
      loading: true
    };
    expect(resultPending).toEqual(actualPending);

    const actionFulfilled = {
      type: getIngredients.fulfilled.type,
      payload: testIngredientsData
    };
    const resultFulfilled = ingredientsSlice.reducer(
      initialState,
      actionFulfilled
    );
    const actualFulfilled = {
      ...initialState,
      loading: false,
      ingredients: testIngredientsData,
      error: undefined
    };
    expect(resultFulfilled).toEqual(actualFulfilled);

    const actionRejected = {
      type: getIngredients.rejected.type,
      error: new Error('test error text')
    };
    const resultRejected = ingredientsSlice.reducer(
      initialState,
      actionRejected
    );
    const actualRejected = {
      ...initialState,
      loading: false,
      error: 'test error text'
    };
    expect(resultRejected).toEqual(actualRejected);
  });
});
