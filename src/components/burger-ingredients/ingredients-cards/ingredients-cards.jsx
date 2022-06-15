import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredients-cards.module.scss";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientCards = (props) => {
    const list = props.arr.map((ingredient, _id) => (
        <li className={`${styles.ingredientCard} mb-10`} key={_id} id={ingredient._id}>
            <Counter count={1} size="default" />
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

IngredientCards.propTypes = {
    props: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
};
