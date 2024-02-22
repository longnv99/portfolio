import { FC } from "react";
import styles from "./index.module.scss";
import ProjectCard from "@/components/molecules/ProjectCard";
import { motion } from "framer-motion";

const Projects: FC = () => {
  return (
    <div id="section-projects" className="container">
      <motion.h2
        className={styles.title}
        initial={{ y: 100, opacity: 0, scale: 0.6 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        My Projects
      </motion.h2>
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
