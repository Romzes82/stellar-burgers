import { expect, test, describe } from '@jest/globals';
import {
  constructorSlice,
  addIngredient,
  removeIngredients,
  sortIngredient,
  clearIngredients
} from '../constructorSlice';

describe('Jest test constructorSlice', () => {
  describe('- buns test in the constructor', () => {
    it('should add buns by pressed button', async () => {
      // начальное состояние, которое будем менять в тестах
      const initialState = {
        bun: null,
        ingredients: []
      };

      const testIngredientsData = {
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
      };

      const result = constructorSlice.reducer(
        initialState,
        addIngredient(testIngredientsData)
      );

      // сравниваем то что получилось с ожидаемым результатом
      expect(testIngredientsData).toEqual({
        _id: result.bun?._id,
        name: result.bun?.name,
        type: result.bun?.type,
        proteins: result.bun?.proteins,
        fat: result.bun?.fat,
        carbohydrates: result.bun?.carbohydrates,
        calories: result.bun?.calories,
        price: result.bun?.price,
        image: result.bun?.image,
        image_mobile: result.bun?.image_mobile,
        image_large: result.bun?.image_large
      });
    });

    it('should remove buns by clean up the constructor', async () => {
      const testClearIngredientData = [
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
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
          id: 'NNqhSN_Gg-pTSBY9RCQ_V'
        }
      ];

      const initialState = {
        bun: null,
        ingredients: testClearIngredientData
      };
      const result = constructorSlice.reducer(initialState, clearIngredients());
      expect(result).toEqual({ bun: null, ingredients: [] });
    });

    it('should sort ingredients by pressed svg-array', async () => {
      const testSortIngredientData = [
        {
          _id: '643d69a5c3f7b9001cfa0941',
          name: 'Биокотлета из марсианской Магнолии',
          type: 'main',
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: 'https://code.s3.yandex.net/react/code/meat-01.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-01-large.png',
          __v: 0,
          id: '0qw6s1InRq-nXMqoN50q7'
        },
        {
          _id: '643d69a5c3f7b9001cfa0942',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
          id: 'WVJWiZOU87MU5b6jHMWNG'
        }
      ];

      const initialState = {
        bun: null,
        ingredients: testSortIngredientData
      };

      const result = constructorSlice.reducer(
        initialState,
        sortIngredient({ index: 0, position: +1 })
      );
      expect(result.ingredients[0]).toEqual(testSortIngredientData[1]);
      expect(result.ingredients[1]).toEqual(testSortIngredientData[0]);
    });
  });
});
