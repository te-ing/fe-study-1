/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from "react";
import styles from "./DefaultButton.module.scss";

interface IDefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: number;
  backgroundColor?: string;
  borderRadius?: number;
  children?: React.ReactNode;
}

export function DefaultButton({
  label,
  size,
  borderRadius = 12,
  backgroundColor,
  type = "button",
  children,
  ...props
}: IDefaultButtonProps) {
  const height = size;
  const fontSize = size && size / 2;
  return (
    <button
      className={styles.button}
      type={type}
      style={{ borderRadius: `${borderRadius}px`, height, fontSize, backgroundColor }}
      {...props}
    >
      {label || children}
    </button>
  );
}
