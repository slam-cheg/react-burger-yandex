import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredients } from "../../utils/data";

export const BurgerIngredients = (data) => {
    const buns = [];
    const sauces = [];
    const mainIngr = [];
    ingredients.forEach((item) => {
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
            <h1 className={`${styles.title} mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <IngredientsTabs />
            <div className={`${styles.wrapper}`}>
                <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>Булки</h2>
                <IngredientCards arr={buns} />
                <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>Соусы</h2>
                <IngredientCards arr={sauces} />
                <h2 className={`${styles.title} mb-6 text text_type_main-medium`}>Начинки</h2>
                <IngredientCards arr={mainIngr} />
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
};

const IngredientsTabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
        <div className={`${styles.tabs} mb-10`}>
            <Tab value="one" active={current === "one"} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === "two"} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === "three"} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    );
};

const IngredientCards = (props) => {
    const list = props.arr.map((ingredient, index) => (
        <React.Fragment key={index}>
            <li className={`${styles.ingredientCard} mb-10`}>
                <img src={ingredient.image} alt="" className="ingredient-card__img ml-4 mr-4" />
                <div className={`${styles.priceWrapper} mt-1 mb-1`}>
                    <p className={`${styles.price} text text_type_digits-default pr-2`}>{ingredient.price}</p>
                    <div className={`${styles.currency}`}>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
                <p className={`${styles.cardTitle} text text_type_main-default`}>{ingredient.name}</p>
            </li>
        </React.Fragment>
    ));
    return <ul className={`${styles.cards} ml-4 mr-2 mt-6 mb-6`}>{list}</ul>;
};
