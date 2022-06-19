import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#modal-root");

export const Modal = (props) => {
    useEffect(() => {
        window.addEventListener("keyup", props.closeModalByEscape);
        return () => {
            window.removeEventListener("keyup", props.closeModalByEscape);
        };
    });
    return ReactDOM.createPortal(
        <div className={props.modalState === props.state ? `${styles.overlay_deactive}` : `${styles.overlay}`} onClick={props.closeModalByOverlay}>
            <div className={`${styles.contentBox} p-10`}>
                <div className={`${styles.closeButton}`} onClick={props.closeModal}>
                    <CloseIcon type="primary" />
                </div>
                <div className={`${styles.content}`}>{props.children}</div>
            </div>
        </div>,
        modalRoot
    );
};

Modal.propTypes = {
    props: PropTypes.shape({
        modalState: PropTypes.bool.isRequired,
        children: PropTypes.object.isRequired,
        closeModal: PropTypes.func.isRequired,
        closeModalByOverlay: PropTypes.func.isRequired,
        closeModalByEscape: PropTypes.func.isRequired,
    }),
};
