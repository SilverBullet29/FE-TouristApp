import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  errors?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      className,
      errors,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`w-full ${className}`}>
        {label && (
          <p className="mb-2 text-sm font-semibold text-neutral-700">{label}</p>
        )}
        <div className="relative">
          <input
            ref={ref}
            placeholder={placeholder ?? "Insert your value here..."}
            value={value}
            onChange={onChange}
            className="w-full rounded-md border border-neutral-200 bg-neutral-200 px-3 py-3 text-sm focus:border-primary-500 focus:outline-none"
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-10 top-3">{rightIcon}</div>
          )}
        </div>
        {errors && <p className="mt-2 text-xs text-error-500">{errors}</p>}
      </div>
    );
  },
);

export default TextInput;
