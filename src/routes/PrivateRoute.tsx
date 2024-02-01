import { setSessionData } from "@infra/storage/local/handler";
import { useAuthStore } from "@infra/storage/store";
import React from "react";
import { Navigate, useMatch } from "react-router-dom";

export type PrivateRouteProps = {
  component: React.JSXElementConstructor<any>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const auth = useAuthStore();
  const match = useMatch("/:page");
  if (!auth.isLoggedin) {
    setSessionData("TEMP_PAGE", match?.pathname);
  }
  return auth.isLoggedin ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
