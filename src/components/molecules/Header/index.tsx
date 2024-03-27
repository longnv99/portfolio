"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import Switch from "@/components/atoms/Switch";
import Logo from "@/components/atoms/Icons/Logo";
import { useTheme } from "next-themes";
import { THEME_MODE } from "@/constants";
import { toggleMode } from "@/utils";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(theme === THEME_MODE.DARK);

  const changeThemes = () => {
    if (theme === THEME_MODE.LIGHT) {
      setTheme(THEME_MODE.DARK);
      setChecked(true);
    } else {
      setTheme(THEME_MODE.LIGHT);
      setChecked(false);
    }
  };

  const handleChangeThemes = (event: ChangeEvent<HTMLInputElement>) => {
    const isDarkMode = theme === THEME_MODE.DARK;
    toggleMode(isDarkMode, event.nativeEvent as any, changeThemes);
  };

  return (
    <header className={styles.header}>
      <div className={cx(styles.content, "container")}>
        <Logo className={styles.icon} />
        <Switch checked={checked} onToggle={handleChangeThemes} />
      </div>
    </header>
  );
};

export default Header;
