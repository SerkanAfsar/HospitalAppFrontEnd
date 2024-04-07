import { forwardRef } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const CustomButton = (
  { title, onClick, type = "button", extraClass, ...rest },
  ref
) => {
  return (
    <button
      type={type}
      className={clsx(styles.wrapper, extraClass)}
      onClick={onClick ?? null}
      {...rest}
    >
      {title}
    </button>
  );
};

export default forwardRef(CustomButton);
