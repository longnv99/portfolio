import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import Title from "@/components/atoms/Title";

const Projects: FC = () => {
  return (
    <div id="section-projects" className="container">
      <Title>My Projects</Title>
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
