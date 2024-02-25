"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

interface IProps {
  children: string;
}

const Title: FC<IProps> = ({ children }) => {
  return (
    <motion.h2
      className={styles.title}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
