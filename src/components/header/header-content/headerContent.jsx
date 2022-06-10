import React from "react";
import styles from "./header-content.module.scss";
import { HeaderCenter } from "../header-center/header-center";
import { HeaderLeftSide } from "../header-left-side/header-left-side";
import { HeaderRightSide } from "../header-right-side/header-right-side";

export const HeaderContent = () => {
    return (
        <div className={`${styles.content} mt-4 mb-4`}>
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide />
        </div>
    );
};
