import { ButtonHTMLAttributes } from "react";
import styles from "./LogoSnplab.module.scss";

interface ILogoSnplabProps extends ButtonHTMLAttributes<HTMLDivElement> {
  text?: string;
  size?: number;
  children?: React.ReactNode;
}

export function LogoSnplab({ text, size = 40, children, ...props }: ILogoSnplabProps) {
  const fontSize = size / 2;
  const cursor = { ...props }.onClick ? "pointer" : "default";
  return (
    <div className={styles.title} {...props} style={{ height: size, fontSize, cursor }}>
      <img src="image/logo.png" alt="snplab logo" className={styles.titleLogo} />
      <span>{text || children}</span>
    </div>
  );
}
