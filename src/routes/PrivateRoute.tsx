import { useAuth } from "@infra/storage/providers/AuthProvider";
import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

type PrivateRouteProps = RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const auth = useAuth();

  return auth.isLoggedin ? (
    <Route {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
