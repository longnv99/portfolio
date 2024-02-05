"use client";

import { ChangeEvent, FC, useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./index.module.scss";

interface IProps {
  checked: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<IProps> = ({ checked, onToggle }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked) {
      if (ref && ref.current) {
        ref.current.checked = true;
      }
      return;
    }

    if (ref && ref.current) {
      ref.current.checked = false;
    }
  }, [checked]);

  return (
    <label className={styles.switch}>
      <input
        ref={ref}
        className={styles.input}
        type="checkbox"
        role="switch"
        onChange={onToggle}
      />
      <svg
        className={cx(styles.icon, styles.light)}
        viewBox="0 0 12 12"
        width="12px"
        height="12px"
        aria-hidden="true"
      >
        <g fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round">
          <circle cx="6" cy="6" r="2" />
          <g strokeDasharray="1.5 1.5">
            <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
            <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
          </g>
        </g>
      </svg>
      <svg
        className={cx(styles.icon, styles.dark)}
        viewBox="0 0 12 12"
        width="12px"
        height="12px"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeLinejoin="round"
          transform="rotate(-45,6,6)"
        >
          <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z" />
        </g>
      </svg>
    </label>
  );
};

export default Switch;
