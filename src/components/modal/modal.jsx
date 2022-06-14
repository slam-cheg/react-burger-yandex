import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Modal = (props) => {
    useEffect(() => {
        window.addEventListener("keyup", props.closeModalByEscape);
        return () => {
            window.removeEventListener("keyup", props.closeModalByEscape);
        };
    }, []);
    return (
        <div className={props.opened === props.state ? `${styles.overlay_deactive}` : `${styles.overlay}`} onClick={props.closeModalByOverlay}>
            <div className={`${styles.contentBox} p-10`}>
                <div className={`${styles.closeButton}`} onClick={props.closeModal}>
                    <CloseIcon type="primary" />
                </div>
                <div className={`${styles.content}`}>{props.children}</div>
            </div>
        </div>
    );
};
