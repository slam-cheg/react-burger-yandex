import React from "react";
import styles from "./header-left-side.module.scss";
import { BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const HeaderLeftSide = () => {
    return (
        <nav className={`${styles.left}`}>
            <a className={`${styles.link} pl-5 pr-5 pt-4 pb-4 mr-2`} aria-label="Конструктор" href="/#">
                <BurgerIcon type="primary" />
                <p className="ml-2 text text text_type_main-default">Конструктор</p>
            </a>
            <a className={`${styles.link} pl-5 pr-5 pt-4 pb-4`} aria-label="Лента заказов" href="/#">
                <ListIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Лента заказов</p>
            </a>
        </nav>
    );
};
