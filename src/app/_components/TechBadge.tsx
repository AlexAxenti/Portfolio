import type { ReactNode, CSSProperties } from "react";
import styles from "./TechBadge.module.css";

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  iconClassName?: string;
  iconStyle?: CSSProperties;
}

export default function TechBadge({ icon, label, iconClassName, iconStyle }: TechBadgeProps) {
  return (
    <span className={styles.techBadge}>
      <span className={`${styles.techIcon} ${iconClassName || ''}`} style={iconStyle}>
        {icon}
      </span>
      {label}
    </span>
  );
}
