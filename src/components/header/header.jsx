import React from "react";
import styles from "./header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <HeaderContent />
        </header>
    );
};

const HeaderContent = () => {
    return (
        <div className={`${styles.content} mt-4 mb-4`}>
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide />
        </div>
    );
};

const HeaderLeftSide = () => {
    return (
        <nav className={`${styles.left}`}>
            <button className={`${styles.button} pl-5 pr-5 pt-4 pb-4 mr-2`} aria-label="Конструктор">
                <BurgerIcon type="primary" />
                <p className="ml-2 text text text_type_main-default">Конструктор</p>
            </button>
            <button className={`${styles.button} pl-5 pr-5 pt-4 pb-4`} aria-label="Лента заказов">
                <ListIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Лента заказов</p>
            </button>
        </nav>
    );
};

const HeaderCenter = () => {
    return (
        <div className={`${styles.center}`}>
            <Logo />
        </div>
    );
};

const HeaderRightSide = () => {
    return (
        <nav>
            <button className={`${styles.button} pl-5 pr-5 pt-4 pb-4`} aria-label="Личный кабинет">
                <ProfileIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Личный кабинет</p>
            </button>
        </nav>
    );
};
