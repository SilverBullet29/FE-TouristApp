import { Sidebar } from "@components/organisms";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LayoutBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full pl-[240px]">{children}</div>
      </div>
    </div>
  );
};

export default LayoutBar;
