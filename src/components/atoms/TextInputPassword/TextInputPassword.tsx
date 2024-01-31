import { forwardRef, useState, useMemo } from "react";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { Icon } from "../Icon";

interface Props extends TextInputProps {
  initialShowPass?: boolean;
}

const TextInputPassword = forwardRef<HTMLInputElement, Props>(
  ({ initialShowPass, type, ...props }, ref) => {
    const [show, setShow] = useState(initialShowPass);
    const EyeButton = useMemo(() => {
      return (
        <button
          className="absolute bottom-[50%] top-[50%]"
          type="button"
          onClick={() => setShow((prev) => !prev)}
        >
          <Icon name={show ? "eye-off" : "eye"} />
        </button>
      );
    }, [show]);
    return (
      <div className="relative">
        <TextInput
          {...props}
          type={!show ? "password" : "text"}
          ref={ref}
          rightIcon={EyeButton}
        />
      </div>
    );
  },
);

export default TextInputPassword;
