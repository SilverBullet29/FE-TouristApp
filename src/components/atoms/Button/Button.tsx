import { useMemo, ButtonHTMLAttributes } from "react";
import { Spinner } from "flowbite-react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  isFull?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariant;
}

const EnumVariant: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-neutral-100",
  secondary:
    "bg-neutral-100 border border-primary-500 hover:bg-primary-100 active:bg-primary-200 text-primary-500",
  danger: "bg-error-500 hover:bg-error-600 active:bg-error-700",
};

const EnumDisabled: Record<ButtonVariant, string> = {
  primary: "bg-neutral-400 text-neutral-400",
  secondary: "border border-neutral-400 text-neutral-400",
  danger: "bg-neutral-400 text-neutral-400",
};

const Button: React.FC<Props> = ({
  children,
  isFull,
  className,
  isLoading,
  disabled,
  variant = "primary",
  ...props
}) => {
  const label = useMemo(() => {
    if (isLoading) {
      return <Spinner color="pink" aria-label="Default status example" />;
    }
    if (typeof children === "string") {
      return <p className="text-base">{children}</p>;
    }
    return children;
  }, [isLoading, children]);

  const style = disabled
    ? `${EnumDisabled[variant]} cursor-not-allowed `
    : `${EnumVariant[variant]} cursor-pointer `;

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`transform rounded-lg  px-4 py-2 ease-in-out  focus:outline-none ${style} ${className} ${isFull ? "w-full" : "w-fit"}`}
    >
      {label}
    </button>
  );
};

export default Button;
