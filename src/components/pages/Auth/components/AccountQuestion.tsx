import { FC } from "react";

type Props = {
  title: string;
  href: string;
  buttonLabel: string;
};

const AccountQuestion: FC<Props> = ({ title, buttonLabel, href }) => {
  return (
    <p className="mt-4 text-xs text-neutral-500">
      {title ?? "Insert something"}{" "}
      <a href={href} className="font-semibold text-primary-500">
        {buttonLabel ?? "Here"}
      </a>
    </p>
  );
};

export default AccountQuestion;
