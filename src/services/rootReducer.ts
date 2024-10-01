import { combineReducers } from 'redux';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorReducer } from './slices/constructorSlice';
import { orderReducer } from './slices/ordersSlice';
import { userReducer } from './slices/userSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredient: constructorReducer,
  orders: orderReducer,
  user: userReducer
});

export default rootReducer;
