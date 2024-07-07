import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './adverts/slice';
import filtersReducer from './filters/slice';
import modalReducer from './modal/slice';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};

const persistedAdvertsReducer = persistReducer(persistConfig, advertsReducer);

export const store = configureStore({
  reducer: {
    adverts: persistedAdvertsReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
