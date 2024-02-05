import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import cx from "classnames";

const Projects: FC = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.grid}>
        {Array(6)
          .fill({})
          .map((_, index) => (
            <div className={styles.item} key={index}>
              <ProjectCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
