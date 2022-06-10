import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-center.module.scss";

export const HeaderCenter = () => {
    return (
        <div className={`${styles.center}`}>
            <Logo />
        </div>
    );
};
