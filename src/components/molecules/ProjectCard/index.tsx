/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import { motion } from "framer-motion";
import IconGithub from "@/components/atoms/Icons/IconGithub";
import IconLink from "@/components/atoms/Icons/IconLink";

interface IProps {
  reverse?: boolean;
}

const ProjectCard: FC<IProps> = ({ reverse }) => {
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
          <h2>Example Project</h2>
        </div>
        <div className={styles.description}>
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </div>
        <div className={styles.link}>
          <IconGithub />
          <IconLink />
        </div>
      </div>
      <div className={cx(styles.image, { [styles.image_reverse]: reverse })}>
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Stripe-Landing-Page-Design-1.png"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
