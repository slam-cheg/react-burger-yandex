import React from "react";
import styles from "./header-right-side.module.scss";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const HeaderRightSide = () => {
    return (
        <nav>
            <a className={`${styles.link} pl-5 pr-5 pt-4 pb-4`} aria-label="Личный кабинет" href="/#">
                <ProfileIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Личный кабинет</p>
            </a>
        </nav>
    );
};
