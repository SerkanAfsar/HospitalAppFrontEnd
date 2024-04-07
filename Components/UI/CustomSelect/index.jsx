"use client";
import { forwardRef } from "react";
import Select from "react-select";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useId } from "react";

const CustomSelect = (
  { title, placeholder, options, extraClass, ...rest },
  ref
) => {
  const id = useId();
  return (
    <div className={clsx(styles.wrapper)}>
      <label htmlFor={id}>{title && title}</label>
      <Select
        id={id}
        className={clsx(extraClass)}
        options={options}
        placeholder={placeholder}
        {...rest}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(CustomSelect);
