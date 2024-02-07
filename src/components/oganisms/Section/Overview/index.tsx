import BackgroundMotion from "@/components/molecules/BackgroundMotion";
import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import Button from "@/components/atoms/Button";

const Overview: FC = () => {
  const onClick = () => {
    const element = document.querySelector("#section-projects");
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section}>
      <div className={cx("container", styles.content)}>
        <h4 className={styles.h4}>Hi,</h4>
        <h1 className={styles.h1}>
          {`I'm`}
          <span className={styles.highlight}>Long</span>
        </h1>
        <h2 className={styles.h2}>Front-end Developer</h2>
        <Button className={styles.button} onClick={onClick}>
          My Projects
        </Button>
      </div>
      <BackgroundMotion />
    </section>
  );
};

export default Overview;
