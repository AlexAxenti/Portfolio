import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  rel?: string;
}

export default function LinkButton({ href, icon, label, rel = "noopener noreferrer" }: LinkButtonProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel={rel}
      className={styles.linkButton}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </a>
  );
}
