import { LayoutBar } from "@components/templates";
import { useAuthStore } from "@infra/storage/store";
import React from "react";
import { Navigate, useMatch } from "react-router-dom";

export type PrivateRouteProps = {
  component: React.JSXElementConstructor<any>;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const { isLoggedin } = useAuthStore();
  const match = useMatch("/:page");
  return isLoggedin ? (
    <div className="flex h-screen w-full">
      <LayoutBar>
        <Component />
      </LayoutBar>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: match?.pathname }} replace />
  );
};

export default PrivateRoute;
