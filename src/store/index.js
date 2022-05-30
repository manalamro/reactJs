import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducer from "./reducers";


const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: "e-wallet-secret-key",
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    // middleware: [thunk, logger, LogRocket.reduxMiddleware()],
    // prepend and concat calls can be chained
    devTools: process.env.NODE_ENV === "development", // disable redux dev tools in PROD
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector;