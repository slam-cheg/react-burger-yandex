import React from "react";
import "./burger-ingredients.css";
import { Tab, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredients } from "../../utils/data";

export const BurgerIngredients = () => {
    const buns = [];
    const sauces = [];
    const main = [];
    ingredients.forEach((item) => {
        if (item.type === "bun") {
            buns.push(item);
        }
        if (item.type === "sauce") {
            sauces.push(item);
        }
        if (item.type === "main") {
            main.push(item);
        }
    });
    return (
        <section className="burger-ingredients pt-10 mb-10">
            <h1 className="burger-ingredients__title mb-5 text text_type_main-large">Соберите бургер</h1>
            <IngredientsTabs />
            <div className="burger-ingredients__wrapper">
                <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Булки</h2>
                <IngredientCards arr={buns} />
                <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Соусы</h2>
                <IngredientCards arr={sauces} />
                <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Начинки</h2>
                <IngredientCards arr={main} />
            </div>
        </section>
    );
};

const IngredientsTabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
        <div style={{ display: "flex", boxSizing: "border-box", overflow: "hidden" }} className="mb-10 tabs">
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
            <li className="ingredient-card mb-10">
                <img src={ingredient.image} alt="" className="ingredient-card__img ml-4 mr-4" />
                <div className="ingredient-card__price-wrapper mt-1 mb-1">
                    <p className="ingredient-card__price text text_type_digits-default pr-2">{ingredient.price}</p>
                    <div className="ingredient-card__currency">
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
                <p className="ingredient-card__title text text_type_main-default">{ingredient.name}</p>
            </li>
        </React.Fragment>
    ));
    return <ul className="burger-ingredients__cards ml-4 mr-2 mt-6 mb-6">{list}</ul>;
};
