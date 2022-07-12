import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#modal-root");

export const Modal = (props) => {
    const closeModalByEscape = (evt) => {
        if (evt.keyCode === 27) {
            closeModal();
        }
    };

    const closeModalByOverlay = (evt) => {
        if (evt.type === "click") {
            if (evt.target === evt.currentTarget) {
                closeModal();
            }
        }
    };

    const closeModal = () => {
        props.setModal(props.modalState === false);
    };

    useEffect(() => {
        window.addEventListener("keyup", closeModalByEscape);
        return () => {
            window.removeEventListener("keyup", closeModalByEscape);
        };
    });
    return ReactDOM.createPortal(
        <div className={props.modalState ? `${styles.overlay}` : `${styles.overlay_deactive}`} onClick={closeModalByOverlay}>
            <div className={`${styles.contentBox} p-10`}>
                <div className={`${styles.closeButton}`} onClick={closeModal}>
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
