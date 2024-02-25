import { FC } from "react";
import styles from "./index.module.scss";
import { badges } from "@/constants";
import Image from "next/image";

const Badges: FC = () => {
  const listBadges = Object.values(badges);
  return (
    <div className={styles.badges}>
      <h3 className={styles.title}>
        My current stack of language/technologies
      </h3>
      <div className={styles.content}>
        {listBadges.map((badge, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={badge} alt="badge" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
