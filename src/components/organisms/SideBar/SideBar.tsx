import { MAP_ROUTE } from "@utils/constant";
import { FC, useCallback, useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Logo from "@assets/image/logo.webp";

type ItemProp = {
  display: string;
  path: string;
  isActive?: boolean;
  className?: string;
  onClick?: (page: string) => void;
};

const Sidebar = () => {
  const [active, setActive] = useState("/");
  const match = useMatch("/:page");

  const handleClick = useCallback((path: string) => {
    setActive(path);
  }, []);

  useEffect(() => {
    handleClick(match?.pathname || "/");
  }, [match?.pathname]);

  const renderContent = useCallback(
    ({ name, path }: { name: string; path: string }) => (
      <BarItem
        key={name}
        display={name}
        path={path}
        onClick={handleClick}
        isActive={active === path}
      />
    ),
    [handleClick, active],
  );

  return (
    <div className="bg-custom-100 stick top-0 z-30 flex h-20 w-full min-w-[240px] flex-row justify-between gap-2 p-4 lg:h-screen lg:w-[240px] lg:flex-col lg:justify-start">
      <a
        className="mb-0 flex flex-row items-center justify-start gap-4 lg:mb-4"
        href="/"
      >
        <img src={Logo} alt="logo" className="h-10 w-10 object-cover" />
        <p className="flex text-xl font-bold text-neutral-700">Tourista</p>
      </a>
      {MAP_ROUTE.map(renderContent)}
    </div>
  );
};

//#region CHILD
const BarItem: FC<ItemProp> = ({
  display,
  path,
  isActive,
  className,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick?.(path);
  }, []);

  const style = isActive
    ? "text-primary-500 font-bold bg-custom-200"
    : "text-neutral-500 font-normal bg-custom-100 hover:bg-primary-100 hover:text-primary-400";

  return (
    <Link
      to={path}
      className={`w-fit rounded-xl px-4 py-3 text-base lg:w-full lg:text-lg ${style} ${className ?? ""}`}
      onClick={handleClick}
    >
      {display}
    </Link>
  );
};
//#endregion

export default Sidebar;
