import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { getIngredients } from '../asyncThunks/ingredientsThunk';

export type TIngredientsState = {
  loading: boolean;
  ingredients: TIngredient[];
  error?: string | null;
};

export const initialState: TIngredientsState = {
  loading: false,
  ingredients: []
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    getAllIngredients: (state) => state.ingredients,
    getIngredientsLoading: (state) => state.loading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { getAllIngredients, getIngredientsLoading } =
  ingredientsSlice.selectors;
export const ingredientsReducer = ingredientsSlice.reducer;
