import BackgroundMotion from "@/components/molecules/BackgroundMotion";
import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import Button from "@/components/atoms/Button";
import { motion } from "framer-motion";

const Overview: FC = () => {
  const onClick = () => {
    const element = document.querySelector("#section-about-me");
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section}>
      <div className={cx("container", styles.content)}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className={styles.h4}>Hi,</h4>
          <h1 className={styles.h1}>
            {`I'm`}
            <span className={styles.highlight}>Long</span>
          </h1>
        </motion.div>
        <motion.h2
          className={styles.h2}
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Front-end Developer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button className={styles.button} onClick={onClick}>
            About me
          </Button>
        </motion.div>
      </div>
      <BackgroundMotion />
    </section>
  );
};

export default Overview;
