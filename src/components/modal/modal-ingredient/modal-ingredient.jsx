import React from "react";
import styles from "./modal-ingredient.module.scss";

export const ModalIngredient = (props) => {
    return (
        <>
            <h3 className={"text text_type_main-large"}>Детали ингредиента</h3>
            <img className={`${styles.image} mb-4`} src={props.info.image_large} alt={props.info.name} />
            <div className={`${styles.infoBlock}`}>
                <p className={`${styles.infoTitle} text text_type_main-medium mb-8`}>{props.info.name}</p>
                <div className={`${styles.values}`}>
                    <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                        <p className="mb-2">Калории,ккал</p>
                        <p className="caloriesValue text text_type_digits-default">{props.info.calories}</p>
                    </div>
                    <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                        <p className="mb-2">Белки, г</p>
                        <p className="proteinsValue text text_type_digits-default">{props.info.proteins}</p>
                    </div>
                    <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                        <p className="mb-2">Жиры, г</p>
                        <p className="fatsValue text text_type_digits-default">{props.info.fat}</p>
                    </div>
                    <div className={`${styles.pfc} text text_type_main-default text_color_inactive`}>
                        <p className="mb-2">Углеводы, г</p>
                        <p className="carbohydratesValue text text_type_digits-default">{props.info.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
