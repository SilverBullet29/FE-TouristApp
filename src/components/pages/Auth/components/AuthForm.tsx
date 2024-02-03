import { Button } from "@components/atoms";
import { FC } from "react";
import AccountQuestion from "./AccountQuestion";

type Props = {
  title: string;
  titleHref?: string;
  href: string;
  onSubmit?: () => void;
  children?: React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
};

const AuthForm: FC<Props> = ({
  title,
  titleHref,
  href,
  children,
  buttonLabel,
  buttonHref,
  onSubmit,
}) => {
  return (
    <div className="z-10 flex h-fit w-1/3 min-w-[395px] flex-col items-start rounded-2xl bg-neutral-100 p-8">
      <p className="text-basic-900 mb-4 text-start font-semibold md:text-xl 2xl:text-2xl">
        {title}
      </p>
      <div className="w-full">{children}</div>
      <AccountQuestion
        href={href}
        buttonLabel={buttonHref ?? "Sign in"}
        title={titleHref ?? "Don't have account?"}
      />
      <Button type="button" isFull className="mt-6" onClick={onSubmit}>
        {buttonLabel ?? "Sign in"}
      </Button>
    </div>
  );
};

export default AuthForm;
