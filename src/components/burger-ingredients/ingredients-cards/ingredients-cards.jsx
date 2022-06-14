import React from "react";
import styles from "./ingredients-cards.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientCards = (props) => {
    const list = props.arr.map((ingredient, _id) => (
        <li className={`${styles.ingredientCard} mb-10`} key={_id} id={ingredient._id}>
            <img src={ingredient.image} alt="" className="ingredient-card__img ml-4 mr-4" />
            <div className={`${styles.priceWrapper} mt-1 mb-1`}>
                <p className={`${styles.price} text text_type_digits-default pr-2`}>{ingredient.price}</p>
                <div className={`${styles.currency}`}>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <p className={`${styles.cardTitle} text text_type_main-default`}>{ingredient.name}</p>
        </li>
    ));
    return <ul className={`${styles.cards} ml-4 mr-2 mt-6 mb-6`}>{list}</ul>;
};
