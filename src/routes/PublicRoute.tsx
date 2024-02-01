import { useAuthStore } from "@infra/storage/store";
import React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./PrivateRoute";

type PublicRouteProps = PrivateRouteProps;

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component }) => {
  const { isLoggedin } = useAuthStore();
  return isLoggedin ? <Navigate to="/" replace /> : <Component />;
};

export default PublicRoute;
