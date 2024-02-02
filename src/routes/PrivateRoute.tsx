import { Sidebar } from "@components/templates";
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
  return auth.isLoggedin ? (
    <div className="flex h-screen w-full">
      <Sidebar />
      <Component />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: match?.pathname }} replace />
  );
};

export default PrivateRoute;
