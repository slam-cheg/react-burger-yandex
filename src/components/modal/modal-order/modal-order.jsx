import React from "react";
import styles from "./modal-order.module.scss";
import done from "../../../images/done.png";

export const ModalOrder = () => {
    return (
        <>
            <h3 className={`${styles.orderNumber} text text_type_digits-large mt-20`}>034536</h3>
            <p className={`${styles.subtitle} text text_type_main-medium mt-8`}>идентификатор заказа</p>
            <div className={`${styles.doneIco} mt-15`}>
                <img src={done} alt="done" />
            </div>
            <p className={`${styles.description} text text_type_main-default mt-15`}>Ваш заказ начали готовить</p>
            <p className={`${styles.description} text text_type_main-default text_color_inactive mt-2 mb-20`}>Дождитесь готовности на орбитальной станции</p>
        </>
    );
};
