import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.scss";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { ModalIngredient } from "../modal/modal-ingredient/modal-ingredient";

export const BurgerConstructor = ({ ingredients }) => {
    const [opened, setModal] = useState(false);
    const [currentIngredient, setIngredient] = useState();

    const orderList = ingredients.map((ingredient, index) => {
        if (ingredient.type === "bun") {
            if (index === 0) {
                return (
                    <li className={`${styles.ingredient} ml-4`} key={index}>
                        <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                            <ConstructorElement type="top" isLocked={true} text={`${ingredient?.name} (верх)`} price={ingredient.price} thumbnail={ingredient.image_mobile} />
                        </div>
                    </li>
                );
            }
            if (index === ingredients.length - 1) {
                return (
                    <li className={`${styles.ingredient} ml-4`} key={index}>
                        <div className={`${styles.ingredientWrapper} pl-8`}>
                            <ConstructorElement type="bottom" isLocked={true} text={`${ingredient?.name} (низ)`} price={ingredient.price} thumbnail={ingredient.image_mobile} />
                        </div>
                    </li>
                );
            }
            return (
                <li className={`${styles.ingredient} ml-4`} key={index}>
                    <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                        <div className={`${styles.dragIco}`}>
                            <DragIcon type="primary" />
                        </div>
                        <ConstructorElement text={ingredient?.name} price={ingredient.price} thumbnail={ingredient.image_mobile} />
                    </div>
                </li>
            );
        } else {
            return (
                <li className={`${styles.ingredient} ml-4`} key={index}>
                    <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                        <div className={`${styles.dragIco}`}>
                            <DragIcon type="primary" />
                        </div>
                        <ConstructorElement text={ingredient?.name} price={ingredient.price} thumbnail={ingredient.image_mobile} />
                    </div>
                </li>
            );
        }
    });

    const openModal = (evt) => {
        const currentCard = evt.target.closest("li");
        const currentIngredient = ingredients.find((ingr) => ingr._id === currentCard.id);
        setIngredient(currentIngredient);
        //        setModal(true);
    };

    const closeModal = () => {
        setModal(opened === false);
    };

    const closeModalByEscape = (evt) => {
        if (evt.keyCode === 27) {
            setModal(opened === false);
        }
    };

    const closeModalByOverlay = (evt) => {
        if (evt.type === "click") {
            if (evt.target === evt.currentTarget) {
                setModal(opened === false);
            }
        }
    };

    return (
        <>
            <section className={`${styles.burgerConstructor} pt-25 mb-10`}>
                <ul className={`${styles.ingredients}`} onClick={openModal}>
                    {orderList[0]}
                    <div className={styles.ingredientsMiddle}></div>
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
                {opened === true && (
                    <Modal opened={opened} closeModal={closeModal} closeModalByOverlay={closeModalByOverlay} closeModalByEscape={closeModalByEscape}>
                        <ModalIngredient info={currentIngredient} />
                    </Modal>
                )}
            </section>
        </>
    );
};

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
};
