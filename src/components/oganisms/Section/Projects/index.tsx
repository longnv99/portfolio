import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import Title from "@/components/atoms/Title";
import { projects } from "@/constants";

const Projects: FC = () => {
  return (
    <div id="section-projects" className="container">
      <Title>My Projects</Title>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
