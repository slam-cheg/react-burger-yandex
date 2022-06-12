import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Modal = (info) => {
    const closeModal = (evt) => {
        const currentModal = evt.target.closest(".modal");
        currentModal.classList.remove(`${styles.overlay_active}`);
        console.log(currentModal);
    };
    useEffect(() => {});

    if (info.type === "ingredient") {
        return (
            <div className={`${styles.overlay}`}>
                <div className={`${styles.contentBox} p-10`}>
                    <div className={`${styles.closeButton}`}>
                        <CloseIcon type="primary" />
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        );
    }
    if (info.type === "order") {
        <div className={`${styles.overlay}`}>
            <div className={`${styles.contentBox} p-10`}>
                <div className={`${styles.closeButton}`}>
                    <CloseIcon type="primary" />
                    <div className="content"></div>
                </div>
            </div>
        </div>;
    }
    return (
        <div className={`${styles.overlay} ${styles.overlay_active} modal`}>
            <div className={`${styles.contentBox} p-10`}>
                <div className={`${styles.closeButton}`} onClick={(evt) => closeModal(evt)}>
                    <CloseIcon type="primary" />
                </div>
                <div className={`${styles.content}`}>
                    <h3 className={"text text_type_main-large"}>Детали ингредиента</h3>
                    <img className={`${styles.image} mb-4`} src="https://code.s3.yandex.net/react/code/bun-02-large.png" alt="#####" />
                    <div className={`${styles.infoBlock}`}>
                        <p className={`${styles.infoTitle} text text_type_main-medium mb-8`}>#####</p>
                        <div className={`${styles.values}`}>
                            <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                                <p className="mb-2">Калории,ккал</p>
                                <p className="caloriesValue text text_type_digits-default">#####</p>
                            </div>
                            <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                                <p className="mb-2">Белки, г</p>
                                <p className="proteinsValue text text_type_digits-default">#####</p>
                            </div>
                            <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                                <p className="mb-2">Жиры, г</p>
                                <p className="fatsValue text text_type_digits-default">#####</p>
                            </div>
                            <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                                <p className="mb-2">Углеводы, г</p>
                                <p className="carbohydratesValue text text_type_digits-default">#####</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// const modalActive = () => {
//     closeButton.addEventListener("click", (evt) => {
//         closePopup(evt, popup);
//     });
//     window.addEventListener("keyup", (evt) => {
//         closePopupByEscape(evt, popup);
//     });
//     popup.addEventListener("click", (evt) => {
//         closePopupByOverlay(evt, popup);
//     });
// };

// function openPopup(evt, popup) {
//     popup.classList.add("popup_opened");
// }

// function closePopup(evt, popup) {
//     popup.classList.remove("popup_opened");
// }

// function closePopupByEscape(evt, popup) {
//     if (evt.keyCode === 27) {
//         closePopup(evt, popup);
//     }
// }

// function closePopupByOverlay(evt, popup) {
//     if (evt.type === "click") {
//         if (evt.target === evt.currentTarget) {
//             closePopup(evt, popup);
//         }
//     }
// }
