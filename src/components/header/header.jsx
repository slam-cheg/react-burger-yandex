import React from "react";
import styles from "./header.module.scss";
import { HeaderContent } from "./header-content/headerContent";

export const AppHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <HeaderContent />
        </header>
    );
};
