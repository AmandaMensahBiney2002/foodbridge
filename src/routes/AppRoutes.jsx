import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import UnauthLayout from "../layouts/UnauthLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../layouts/ProtectedRoute";


function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.auth ? (
              <ProtectedRoute>
                <AuthLayout>{route.element}</AuthLayout>
              </ProtectedRoute>
            ) : (
              <UnauthLayout>{route.element}</UnauthLayout>
            )
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;