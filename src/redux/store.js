import { 
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';


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

// import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';


const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // logger,
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const store = configureStore ({
        reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactReducer,
    },
    middleware,
});

const persistor = persistStore(store);


export default {store, persistor};



// ---------------------------

// const persistConfig = {
//     key: 'YUHHHUUUUU!!!',
//     storage,
//   }


// const middleware = [...getDefaultMiddleware({
//   serializableCheck: {
//        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//    }),
// logger
//];

// const rootReducer = combineReducers({
//     contacts: contactReducer,
// })

// const perRed = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         contacts: perRed,
//     },
//     middleware,
// });

// const persistor = persistStore(store);


// export default {store, persistor};




// ----------------------- ORIGIN ----------------------

// const middleware = [...getDefaultMiddleware(),logger];

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         contacts: contactReducer,
//     },
//     middleware,
// });


// export default store;