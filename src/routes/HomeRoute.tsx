import { Home } from "@components/pages";
import { Sidebar } from "@components/templates";

const HomeRoute = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <Home />
    </div>
  );
};

export default HomeRoute;
