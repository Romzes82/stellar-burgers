import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { getIngredients } from '../asyncThunks/ingredientsThunk';
// import { getIngredients } from './actions';

export type TIngredientsState = {
  loading: boolean;
  ingredients: Array<TIngredient>;
  error?: string;
};

export const initialState: TIngredientsState = {
  loading: false,
  ingredients: []
};

// export const getIngredients = createAsyncThunk('ingredients/fetch', async () =>
//   getIngredientsApi()
// );

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    // getIsAuthChecked: (state) => state.isAuthChecked,
    getAllIngredients: (state) => state.ingredients,
    getIngredientsLoading: (state) => state.loading,
    getIngredientsError: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.loading = false;
        state.error = undefined;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.loading = true;
        state.ingredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { getAllIngredients, getIngredientsLoading, getIngredientsError } =
  ingredientsSlice.selectors;
export const ingredientsReducer = ingredientsSlice.reducer;

//* eslint-disable prettier/prettier */
// // type TBooksState = {
// //     books: Array<TBook>;
// //     loading: boolean;
// //     error: string | null;
// // };

// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { TIngredient } from '@utils-types';
// import { RootState } from '../store';
// import { getIngredientsApi } from '@api';

// // // type TIngredientWithV = TIngredient & {
// // //   __v?: number | string;
// // // };

// type TIngredientsState = {
//   ingredients: TIngredient[];
//   ingredientsFetchFailed: boolean;
//   ingredientsFetchRequest: boolean;
// };

// // const initialState: TIngredientsState = {
// //   ingredients: [],
// //   ingredientsFetchFailed: false,
// //   ingredientsFetchRequest: false
// // };

// const initialState: TIngredientsState = {
//   ingredients: [],
//   ingredientsFetchFailed: false,
//   ingredientsFetchRequest: false
// };

// export type IngredientsPromise = {
//   data: TIngredient[],
//   success: boolean
// };

// // export const getIngredientsFetch = createAsyncThunk(
// //   'ingredients/getAllIngredients',
// //   async () => {
// //         try {
// //           const data = await getIngredientsApi();
// //           return data;
// //         } catch (error) {
// //           throw new Error((error as { message: string }).message);
// //         }
// //     }
// //     //  getIngredientsApi()

// //       // const response = await checkout()
// //       // return response
// // );

// // export const fetchIngredients = createAsyncThunk(
// //   'ingredients/fetchIngredients',
// //   async () => {
// //     try {
// //       const data = await getIngredientsApi();
// //       return data;
// //     } catch (error) {
// //       throw new Error((error as { message: string }).message);
// //     }
// //   }
// // );

// type IngredientsError = {
//   data: unknown,
//   ok: boolean,
//   status: number,
//   statusText: string,
//   success: boolean,
//   url: string
// }

// export const getIngredientsFetch = createAsyncThunk(
//   'ingredients/fetchIngredients',
//   async () => {
//     try {
//       const data = await getIngredientsApi();
//       return data;
//     } catch (error) {
//       throw new Error((error as { ingredientsFetchFailed: string }).ingredientsFetchFailed);
//     }
//   }
// );

// export const getIngredientsFetch = createAsyncThunk
//   // <
//   // IngredientsPromise,
//   // // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
//   // void,
//   // {
//   //   rejectValue: IngredientsError
//   // }
//   // >
//   (
//   'ingredients/fetchIngredients',
//   (_, thunkAPI) =>
//     getIngredientsApi()
//       .catch(e => {
//         const { rejectWithValue } = thunkAPI;
//         const hasErrorData = (e as unknown as IngredientsError);
//         return rejectWithValue(hasErrorData);
//       })
// );

// export const ingredientsSlice = createSlice({
//   name: 'ingredients',
//   initialState,
//   reducers: {},
//   // selectors: {
//   //   getIngredientsSelector: (SliceState) => SliceState.ingredientsFetchRequest
//   // },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getIngredientsFetch.pending, (state) => {
//         state.ingredientsFetchRequest = true;
//         state.ingredientsFetchFailed = false;
//       })
//       .addCase(getIngredientsFetch.rejected, (state) => {
//         state.ingredientsFetchRequest = false;
//         state.ingredientsFetchFailed = true;
//       })
//       .addCase(
//         getIngredientsFetch.fulfilled,
//         (state, action) => {
//           state.ingredients = action.payload;
//           state.ingredientsFetchRequest = false;
//         }
//       );
//   }
// });

// // export default ingredientsSlice.reducer;

// export const ingredientsReducer = ingredientsSlice.reducer;
// export const getIngredientsSelector = (state: RootState) => state.ingredientsR.ingredientsFetchFailed;

// export const ingredientsSelector = (state: RootState) => state.ingredientsReducer;
// export const getIngredientsSelector = (state: RootState) => state.userReducer;
// console.log(ingredientsSlice.getIngredientsSelector({ counter: { value: 2 } })) // { value: 2 }
// export { reducer } = ingredientsSlice.reducer;
// export { reducer } = bookSlice.reducer;
// export const { getIngredientsSelector } = ingredientsSlice.selectors;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getIngredientsApi } from '../utils/burger-api';
// import { TIngredient } from '../utils/types';
// import { RootState } from '../services/store';

// type IngredientsState = {
//   items: TIngredient[];
//   isLoading: boolean;
//   error: string | null;
// };

// const initialState: IngredientsState = {
//   items: [],
//   isLoading: false,
//   error: null
// };

// export const fetchIngredients = createAsyncThunk(
//   'ingredients/fetchIngredients',
//   async () => {
//     try {
//       const data = await getIngredientsApi();
//       return data;
//     } catch (error) {
//       throw new Error((error as { message: string }).message);
//     }
//   }
// );

// export const ingredientsSlice = createSlice({
//   name: 'ingredients',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchIngredients.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchIngredients.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchIngredients.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message || 'Произошла ошибка';
//       });
//   }
// });

// export const selectIngredients = (state: RootState) => state.ingredients.items;
// export const selectIngredientsLoading = (state: RootState) =>
//   state.ingredients.isLoading;
// export const selectIngredientsError = (state: RootState) =>
//   state.ingredients.error;
