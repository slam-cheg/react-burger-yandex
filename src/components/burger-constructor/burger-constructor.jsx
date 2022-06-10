import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.scss";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredients } from "../../utils/data";

export const BurgerConstructor = (data) => {
    const buns = []; // incoming buns
    const midIngredients = []; // incoming main and sauces

    ingredients.forEach((item) => {
        if (item.type !== "bun") {
            midIngredients.push(item);
        } else {
            buns.push(item);
        }
    });

    const topBottomIngredient = buns[0];

    const midList = midIngredients.map((ingredient, _id) => (
        <li className={`${styles.ingredient} ml-4`} key={_id}>
            <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                <div className={`${styles.dragIco}`}>
                    <DragIcon type="primary" />
                </div>
                <ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image_mobile} />
            </div>
        </li>
    ));

    return (
        <>
            <section className={`${styles.burgerConstructor} pt-25 mb-10`}>
                <ul className={`${styles.ingredients}`}>
                    <li className={`${styles.ingredient} ml-4`}>
                        <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                            <ConstructorElement type="top" isLocked={true} text={`${topBottomIngredient.name} (верх)`} price={topBottomIngredient.price} thumbnail={topBottomIngredient.image_mobile} />
                        </div>
                    </li>

                    <div className={`${styles.ingredientsMiddle} mb-4`}>{midList}</div>

                    <div className={`${styles.ingredient} ml-4`}>
                        <div className={`${styles.ingredientWrapper} pl-8`}>
                            <ConstructorElement type="bottom" isLocked={true} text={`${topBottomIngredient.name} (низ)`} price={topBottomIngredient.price} thumbnail={topBottomIngredient.image_mobile} />
                        </div>
                    </div>
                </ul>

                <div className={`${styles.order} mb-10 ml-4 mr-4`}>
                    <div className={`${styles.total} mr-10`}>
                        <span className="mr-2 text text_type_digits-medium">610</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className={`${styles.buttonWrapper}`}>
                        <Button type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

BurgerConstructor.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
    }),
};
