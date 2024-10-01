import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../rootReducer';

describe('Jest test rootReducer', () => {
  it('should done initial state', async () => {
    const store = configureStore({ reducer: rootReducer });
    const action = { type: '@@INIT' };
    const state = rootReducer(undefined, action);
    expect(state).toEqual(store.getState());
  });
});
