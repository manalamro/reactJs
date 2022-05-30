import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import("../views/Login/Login"));
const AdminHome = lazy(() => import("../views/AdminHome/AdminHome"));
const AdsManager = lazy(() => import("../views/AdsManager/AdsManager"));

// const Reader = lazy(() => import("../views/Reader"));

const IndexRouter = function () {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute path="/" authorized={[1]}>
            <Suspense>
              <AdminHome />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path="/manager"
        element={
          <PrivateRoute path="/" authorized={[4]}>
            <Suspense>
              <AdsManager />
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default IndexRouter;
