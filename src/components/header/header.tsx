import React from "react";
import "./header.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
    return (
        <header className="header">
            <HeaderContent />
        </header>
    );
};

const HeaderContent = () => {
    return (
        <div className="header__content mt-4 mb-4">
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide />
        </div>
    );
};

const HeaderLeftSide = () => {
    return (
        <nav className="header__left">
            <button className="header__button pl-5 pr-5 pt-4 pb-4 mr-2" aria-label="Конструктор">
                <BurgerIcon type="primary" />
                <p className="ml-2 text text text_type_main-default">Конструктор</p>
            </button>
            <button className="header__button pl-5 pr-5 pt-4 pb-4" aria-label="Лента заказов">
                <ListIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Лента заказов</p>
            </button>
        </nav>
    );
};

const HeaderCenter = () => {
    return (
        <div className="header__center">
            <Logo />
        </div>
    );
};

const HeaderRightSide = () => {
    return (
        <nav className="header__right">
            <button className="header__button pl-5 pr-5 pt-4 pb-4" aria-label="Личный кабинет">
                <ProfileIcon type="secondary" />
                <p className="ml-2 text text_type_main-default text_color_inactive">Личный кабинет</p>
            </button>
        </nav>
    );
};
