import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import Title from "@/components/atoms/Title";

const Projects: FC = () => {
  return (
    <div id="section-projects" className="container">
      <Title>My Projects</Title>
      <div className={styles.grid}>
        {Array(3)
          .fill({})
          .map((_, index) => (
            <ProjectCard key={index} reverse={index % 2 === 1} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
