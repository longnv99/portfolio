/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import { motion } from "framer-motion";
import IconGithub from "@/components/atoms/Icons/IconGithub";
import IconLink from "@/components/atoms/Icons/IconLink";
import Link from "next/link";

interface IProject {
  url: string;
  github: string;
  image: string;
  name: string;
  description: string;
}
interface IProps {
  project: IProject;
  reverse?: boolean;
}

const ProjectCard: FC<IProps> = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.card}
    >
      <div
        className={cx(styles.content, { [styles.content_reverse]: reverse })}
      >
        <div className={styles.title}>
          <h4>Project name</h4>
          <h2>{project.name}</h2>
        </div>
        <div className={styles.description}>{project.description}</div>
        <div className={styles.link}>
          <Link href={project.github} target="_blank">
            <IconGithub />
          </Link>
          <Link href={project.url} target="_blank">
            <IconLink />
          </Link>
        </div>
      </div>
      <Link href={project.url} target="_blank">
        <div className={cx(styles.image, { [styles.image_reverse]: reverse })}>
          <img src={project.image} alt="project-image" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
