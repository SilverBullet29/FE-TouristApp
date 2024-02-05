import { Sidebar } from "@components/organisms";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LayoutBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
};

export default LayoutBar;
