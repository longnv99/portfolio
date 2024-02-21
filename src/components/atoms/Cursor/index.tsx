"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./index.module.scss";

const Cursor: FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX;
      const posY = event.clientY;

      if (cursorDotRef && cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      if (cursorOutlineRef && cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX - 8}px`,
            top: `${posY - 8}px`,
          },
          { duration: 800, fill: "forwards" }
        );
      }
    };

    const handleMouseClick = () => {
      if (cursorOutlineRef && cursorOutlineRef.current) {
        cursorOutlineRef.current.classList.add(styles.expand);

        setTimeout(() => {
          cursorOutlineRef.current?.classList.remove(styles.expand);
        }, 500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div>
      <div className={styles.dot} ref={cursorDotRef}></div>
      <div className={styles.outline} ref={cursorOutlineRef}></div>
    </div>
  );
};

export default Cursor;
