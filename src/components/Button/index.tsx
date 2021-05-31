import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string
  size: string
  buttonColor?: string
  rounded: boolean
  margin?: boolean
  marginBottom?: boolean
  className?: string
  resOnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const Button = ({ 
    text, 
    size, 
    buttonColor,
    rounded = false, 
    margin = false,
    marginBottom = false,
    className,
    resOnClick,
    disabled
}: ButtonProps) => {
  return (
    <button
      onClick={resOnClick}
      className={classNames(styles.btn, className, {
        [styles.rounded]: rounded,
        [styles.btn_small]: size === "sm",
        [styles.btn_medium]: size === "md",
        [styles.btn_large]: size === "lg",
        [styles.btn_primary]: buttonColor === "primary",
        [styles.btn_secondary]: buttonColor=== "secondary",
        [styles.btn_margin]: margin,
        [styles.btn_margin_bottom]: marginBottom

      })}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
