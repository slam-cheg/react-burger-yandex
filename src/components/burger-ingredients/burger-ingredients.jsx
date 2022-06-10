import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.scss";
import { IngredientCards } from "./ingredients-cards/ingredients-cards";
import { ingredients } from "../../utils/data";
import { IngredientsTabs } from "./ingredients-tabs/ingredients-tabs";

export const BurgerIngredients = (data) => {
    const buns = [];
    const sauces = [];
    const mainIngr = [];
    ingredients.forEach((item) => { // ingredients >>> data
        if (item.type === "bun") {
            buns.push(item);
        }
        if (item.type === "sauce") {
            sauces.push(item);
        }
        if (item.type === "main") {
            mainIngr.push(item);
        }
    });
    return (
        <section className={`${styles.burgerIngredients} pt-10 mb-10`}>
            <h1 className={`mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <IngredientsTabs />
            <div className={`${styles.wrapper}`}>
                <h2 className={`mb-6 text text_type_main-medium`}>Булки</h2>
                <IngredientCards arr={buns} />
                <h2 className={`mb-6 text text_type_main-medium`}>Соусы</h2>
                <IngredientCards arr={sauces} />
                <h2 className={`mb-6 text text_type_main-medium`}>Начинки</h2>
                <IngredientCards arr={mainIngr} />
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
};
