import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#modal-root");

export const Modal = (props) => {
    const closeModalByEscape = (evt) => {
        if (evt.keyCode === 27) {
            props.setModal(props.ingredientModalState === false);
        }
    };

    const closeModalByOverlay = (evt) => {
        if (evt.type === "click") {
            if (evt.target === evt.currentTarget) {
                props.setModal(props.ingredientModalState === false);
            }
        }
    };

    const closeModal = () => {
        props.setModal(props.ingredientModalState === false);
    };

    useEffect(() => {
        window.addEventListener("keyup", closeModalByEscape);
        return () => {
            window.removeEventListener("keyup", closeModalByEscape);
        };
    });
    return ReactDOM.createPortal(
        <div className={props.modalState === props.state ? `${styles.overlay_deactive}` : `${styles.overlay}`} onClick={closeModalByOverlay}>
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
