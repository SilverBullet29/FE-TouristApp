import { useMemo, ButtonHTMLAttributes } from "react";
import { Spinner } from "flowbite-react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  isFull?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  isFull,
  className,
  isLoading,
  ...props
}) => {
  const label = useMemo(() => {
    if (isLoading) {
      return <Spinner color="pink" aria-label="Default status example" />;
    }
    if (typeof children === "string") {
      return <p className="text-base text-neutral-100">{children}</p>;
    }
    return children;
  }, [isLoading, children]);

  return (
    <button
      {...props}
      className={`focus:shadow-outline-blue transform rounded-lg bg-primary-600 px-4 py-2 ease-in-out hover:bg-primary-700 focus:outline-none  active:bg-primary-600 ${className} ${isFull ? "w-full" : "w-fit"}`}
    >
      {label}
    </button>
  );
};

export default Button;
