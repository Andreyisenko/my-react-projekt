import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'counter-persist',
  version: 1,
  storage,
  //  щоб  step не зберігався в локалсторедж при оновленні або при перезавантаженні додаємо його в  blacklist
  blacklist: ['step'],
// якщо треба з 20 пунктів тільки один записати то використовуємо whitelist і пишемо туди що хочемо залишити в локалсторедж
  whitelist: ['counter']
};

// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist

export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
