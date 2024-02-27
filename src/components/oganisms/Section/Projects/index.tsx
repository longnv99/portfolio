import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import Title from "@/components/atoms/Title";
import { motion } from "framer-motion";

const Projects: FC = () => {
  return (
    <div id="section-projects" className="container">
      <Title>My Projects</Title>
      <div className={styles.grid}>
        {Array(6)
          .fill({})
          .map((_, index) => (
            <motion.div
              className={styles.item}
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
            >
              <ProjectCard />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
