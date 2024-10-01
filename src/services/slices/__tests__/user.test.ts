import { describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../rootReducer';
import { login, userData } from '@thunks';

const testUserData = {
  email: 'test@mail.ru',
  name: 'test_user'
};

jest.mock('@api', () => ({
  loginUserApi: jest.fn(() =>
    Promise.resolve({
      user: testUserData,
      accessToken: 'test-accessToken',
      refreshToken: 'test-refreshToken'
    })
  ),
  getUserApi: jest.fn(() =>
    Promise.resolve({
      user: testUserData
    })
  )
}));

jest.mock('../../../utils/cookie', () => ({
  setCookie: jest.fn()
}));

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn()
};

describe('Jest test userSlice', () => {
  it('should done login action', async () => {
    const store = configureStore({
      reducer: { user: rootReducer }
    });
    await store.dispatch(
      login({
        email: testUserData.email,
        password: 'test_pass_12345'
      })
    );

    const state = store.getState().user;
    const result = state.user.user;
    expect(result).toEqual(testUserData);
    expect(state.user.isAuthChecked).toBe(true);
  });

  it('should done userData action', async () => {
    const store = configureStore({
      reducer: { user: rootReducer }
    });
    await store.dispatch(userData());

    const state = store.getState().user;
    const result = state.user.user;
    expect(result).toEqual(testUserData);
    expect(state.user.isAuthChecked).toBe(true);
  });
});
