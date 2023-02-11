import { ButtonHTMLAttributes } from "react";
import styles from "./ImageWrapper.module.scss";

interface IImageWrapperProps extends ButtonHTMLAttributes<HTMLDivElement> {
  text?: string;
  src: string;
  size?: number;
  children?: React.ReactNode;
}

export function ImageWrapper({ text, src, size = 40, children, ...props }: IImageWrapperProps) {
  const cursor = { ...props }.onClick ? "pointer" : "default";
  const fontSize = size / 2;
  return (
    <div className={styles.wrapper} style={{ height: size, fontSize, cursor }} {...props}>
      <img src={src} alt={src.split("/").pop()} className={styles.image} />
      {text || children}
    </div>
  );
}
