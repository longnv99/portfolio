import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
