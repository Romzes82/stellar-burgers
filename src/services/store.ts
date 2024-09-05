import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ingredientsSlice } from './slices/ingredientsSlice';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorReducer } from './slices/constructorSlice';
import rootReducer from './rootReducer';
// import { ingredientsReducer, constructorReducer } from '@slices';

// const rootReducer = () => { }; // Заменить на импорт настоящего редьюсера

// const rootReducer = combineReducers({
//   // [ingredientsSlice.reducerPath]: ingredientsSlice.reducer
//   ingredientsReducer,
//   constructorReducer
//   // ingredientsR: ingredientsReducer
// });

// ingredients: TIngredientsState;
// user: TInitialState;
// orders: TInitialState;
// constructorIngredient: TConstructorState;

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => dispatchHook();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;

// import { configureStore } from '@reduxjs/toolkit';

// import {
//   TypedUseSelectorHook,
//   useDispatch as dispatchHook,
//   useSelector as selectorHook
// } from 'react-redux';
// import rootReducer from './rootReducer';
// import { ingredientsReducer } from './slices/ingredientsSlice';

// // const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера

// const store = configureStore({
//   // reducer: rootReducer,
//   reducer: {
//     ingredientsReducer
//   },
//   devTools: process.env.NODE_ENV !== 'production'
// });

// // export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = () => dispatchHook();
// export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

// export default store;
