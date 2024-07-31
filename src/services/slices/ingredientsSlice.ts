/* eslint-disable prettier/prettier */
// type TBooksState = {
//     books: Array<TBook>;
//     loading: boolean;
//     error: string | null;
// };

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { RootState } from '../store';
import { getIngredientsApi } from '@api';

// const initialState: TBooksState = {
//     books: [],
//     loading: false,
//     error: null
// };

// type TIngredientV = TIngredient & {
//   __v: number;
// };

// type TIngredientsVState = {
//   ingredients: Array<TIngredientV>;
type TIngredientWithV = TIngredient & {
  __v?: number | string;
};

type TIngredientsState = {
  ingredients: TIngredientWithV[];
  ingredientsFetchFailed: boolean;
  ingredientsFetchRequest: boolean;
};

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsFetchFailed: false,
  ingredientsFetchRequest: false
};

// const initialState: TIngredientState = {
//   ingredients: [],
//   loading: false,
//   error: false
// };

export type IngredientsPromise = {
  data: TIngredientWithV[];
  success: boolean;
};

export const getIngredientsFetch = createAsyncThunk(
  'ingredients/getAllIngredients',
  async () => {
    const res = getIngredientsApi();
    return res;
  }
    // getIngredientsApi()
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  // selectors: {
  //   getIngredientsSelector: (state) => state
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsFetch.pending, (state) => {
        state.ingredientsFetchRequest = true;
        state.ingredientsFetchFailed = false;
      })
      .addCase(getIngredientsFetch.rejected, (state) => {
        state.ingredientsFetchRequest = false;
        state.ingredientsFetchFailed = true;
      })
      .addCase(
        getIngredientsFetch.fulfilled,
        (state, action) => {
          state.ingredients = action.payload;
          state.ingredientsFetchRequest = false;
        }
      );
  }
});

// export default ingredientsSlice.reducer;
export const ingredientsReducer = ingredientsSlice.reducer;
export const getIngredientsSelector = (state: RootState) => state.ingredientsReducer;

// export const ingredientsSelector = (state: RootState) => state.ingredientsReducer;
// export const getIngredientsSelector = (state: RootState) => state.userReducer;
// console.log(ingredientsSlice.getIngredientsSelector({ counter: { value: 2 } })) // { value: 2 }
// export { reducer } = ingredientsSlice.reducer;
// export { reducer } = bookSlice.reducer;
// export { getIngredientsSelector } = bookSlice.selectors;
