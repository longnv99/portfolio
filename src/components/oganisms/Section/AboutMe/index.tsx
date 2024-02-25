"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import Title from "@/components/atoms/Title";
import Badges from "@/components/molecules/Badges";

const AboutMe: FC = () => {
  return (
    <section id="section-about-me" className="container">
      <Title>About me</Title>
      <p
        className={styles.desc}
      >{`Hi, my name is Long. I'm 25 years old. I'm a Front-end Developer.`}</p>
      <p
        className={styles.desc}
      >{`I'm really passionate about Javascript and Web Development. 
          I started leaning web programming in 2021. 
          Before that, I had a background in Java/Android so getting access to Javascript/Front-end is not difficult. 
          I like it, i searched many different sources to learn about this language in Internet, Youtube. `}</p>
      <p
        className={styles.desc}
      >{`In March 2022, I decided to do an internship at a company to experience what a real environment is like. 
          I learned a lot from colleagues while working. `}</p>
      <p
        className={styles.desc}
      >{`I want to be a good person in the field that I have chosen so I tried a lot, worked hard.`}</p>
      <Badges />
    </section>
  );
};

export default AboutMe;
