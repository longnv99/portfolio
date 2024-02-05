"use client";

import { FC } from "react";
import styles from "./index.module.scss";

const LoadingOverlay: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.core}></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
