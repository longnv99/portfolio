"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import cx from "classnames";

interface IProps {
  children: string;
  className?: string;
}

const Title: FC<IProps> = ({ children, className }) => {
  return (
    <motion.h2
      className={cx(styles.title, className)}
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
