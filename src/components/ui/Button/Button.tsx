import classNames from "classnames";

import { ButtonProps } from "./types";
import styles from "./Button.module.sass";


const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={classNames(className, styles.Button)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


export default Button;