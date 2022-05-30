import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import AppRoutes from "./routes";
// import ErrorPage from "./components/error-page";
// import SuspenseFallback from "./components/suspense";

const App = function () {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
