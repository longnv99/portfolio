"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import Title from "@/components/atoms/Title";
import IconEmail from "@/components/atoms/Icons/IconEmail";
import IconGithub from "@/components/atoms/Icons/IconGithub";
import IconFacebook from "@/components/atoms/Icons/IconFacebook";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactUrls } from "@/constants";
import IconCV from "@/components/atoms/Icons/IconCV";

const Contact: FC = () => {
  const contacts = [
    { icon: <IconCV />, url: contactUrls.cv },
    { icon: <IconEmail />, url: `mailto:${contactUrls.email}` },
    { icon: <IconGithub />, url: contactUrls.github },
    { icon: <IconFacebook />, url: contactUrls.facebook },
  ];

  return (
    <div className="container">
      <Title className={styles.title}>Contact Me</Title>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.group}
      >
        {contacts?.map((contact, index) => (
          <Link href={contact.url} target="_blank" key={index}>
            {contact.icon}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
