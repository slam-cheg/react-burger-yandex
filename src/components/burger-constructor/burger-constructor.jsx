import React from "react";
import styles from "./burger-constructor.module.css";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredients } from "../../utils/data";

export const BurgerConstructor = () => {
    const topIngredient = ingredients[0];
    const midIngredients = [];
    const lastIngredient = ingredients[ingredients.length - 1];
    ingredients.forEach((item) => {
        if (topIngredient.name !== item.name) {
            if (lastIngredient.name !== item.name) {
                midIngredients.push(item);
            }
        }
    });
    const midList = midIngredients.map((ingredient, index) => (
        <div className="ml-4" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "568px", boxSizing: "border-box" }} key={index}>
            <div className={styles.ingredients + "pl-8 mb-4"}>
                <div className={styles.dragIco}>
                    <DragIcon type="primary" />
                </div>
                <ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image_mobile} />
            </div>
        </div>
    ));
    return (
        <>
            <section className={styles.burgerConstructor + "pt-25 mb-10"}>
                <div className={styles.ingredients}>
                    <div className="ml-4" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "568px", boxSizing: "border-box" }}>
                        <div className={styles.ingredientWrapper + "pl-8 mb-4"}>
                            <div className={styles.dragIco}>
                                <DragIcon type="primary" />
                            </div>
                            <ConstructorElement type="top" isLocked={true} text={`${topIngredient.name} (верх)`} price={topIngredient.price} thumbnail={topIngredient.image_mobile} />
                        </div>
                    </div>

                    <div className={styles.ingredients + "mb-4"}>{midList}</div>

                    <div className="ml-4" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "568px", boxSizing: "border-box" }}>
                        <div className={styles.ingredientWrapper + "pl-8"}>
                            <div className={styles.dragIco}>
                                <DragIcon type="primary" />
                            </div>
                            <ConstructorElement type="bottom" isLocked={true} text={`${lastIngredient.name} (низ)`} price={lastIngredient.price} thumbnail={lastIngredient.image_mobile} />
                        </div>
                    </div>
                </div>
                <div className={styles.order + "mb-10 ml-4 mr-4"}>
                    <div className={styles.total + "mr-10"}>
                        <span className="mr-2 text text_type_digits-medium">610</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
