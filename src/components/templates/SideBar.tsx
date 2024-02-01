import { MAP_ROUTE } from "@utils/constant";
import { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
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

  const handleClick = useCallback((path: string) => {
    setActive(path);
  }, []);

  return (
    <div className="bg-custom-100 flex w-[240px] flex-col gap-2 p-4">
      <a className="mb-4 flex flex-row items-center gap-4" href="/">
        <img src={Logo} alt="logo" className="h-10 w-10 object-cover" />
        <p className="text-xl font-bold text-neutral-700">Tourista</p>
      </a>
      {MAP_ROUTE.map(({ name, path }) => (
        <BarItem
          key={name}
          display={name}
          path={path}
          onClick={handleClick}
          isActive={active === path}
        />
      ))}
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
    ? "text-neutral-100 font-bold bg-primary-500"
    : "text-neutral-500 font-normal bg-custom-100 hover:bg-primary-100 hover:text-primary-400";

  return (
    <Link
      to={path}
      className={`w-full rounded-xl px-4 py-3 text-lg ${style} ${className ?? ""}`}
      onClick={handleClick}
    >
      {display}
    </Link>
  );
};
//#endregion

export default Sidebar;
