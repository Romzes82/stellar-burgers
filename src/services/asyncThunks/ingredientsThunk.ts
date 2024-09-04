// import { getIngredientsApi } from '@api';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { getIngredientsApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getIngredientsFetch = createAsyncThunk('ingredients/getAll', async () =>
//   getIngredientsApi()
// );
export const getIngredients = createAsyncThunk('ingredients/fetch', async () =>
  getIngredientsApi()
);
