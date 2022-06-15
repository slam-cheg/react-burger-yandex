import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.scss";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { ModalIngredient } from "../modal/modal-ingredient/modal-ingredient";
import { ModalOrder } from "../modal/modal-order/modal-order";

export const BurgerConstructor = ({ ingredients }) => {
    const [ingredientModalState, setModal] = useState(false);
    const [orderModalState, setOrder] = useState(false);
    const [currentIngredient, setIngredient] = useState();
    const buns = [];
    const midIngredients = [];

    ingredients.forEach((item) => {
        if (item.type !== "bun") {
            midIngredients.push(item);
        } else {
            buns.push(item);
        }
    });

    const topBottomIngredient = buns[0];

    const midList = midIngredients.map((ingredient, _id) => (
        <li className={`${styles.ingredient} ml-4`} key={_id} id={ingredient._id}>
            <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                <div className={`${styles.dragIco}`}>
                    <DragIcon type="primary" />
                </div>
                <ConstructorElement text={ingredient?.name} price={ingredient.price} thumbnail={ingredient.image_mobile} />
            </div>
        </li>
    ));

    const openModal = (evt) => {
        const currentCard = evt.target.closest("li");
        if (currentCard === null) {
            console.log("Open Order");
            setOrder(true);
        } else {
            console.log("Open Ingr");
            const currentIngredient = ingredients.find((ingr) => ingr._id === currentCard.id);
            setIngredient(currentIngredient);
            setModal(true);
        }
    };

    const closeModal = () => {
        if (ingredientModalState) {
            setModal(ingredientModalState === false);
        }
        if (orderModalState) {
            setOrder(orderModalState === false);
        }
    };

    const closeModalByEscape = (evt) => {
        if (evt.keyCode === 27) {
            if (ingredientModalState) {
                setModal(ingredientModalState === false);
            }
            if (orderModalState) {
                setOrder(orderModalState === false);
            }
        }
    };

    const closeModalByOverlay = (evt) => {
        if (evt.type === "click") {
            if (evt.target === evt.currentTarget) {
                if (ingredientModalState) {
                    setModal(ingredientModalState === false);
                }
                if (orderModalState) {
                    setOrder(orderModalState === false);
                }
            }
        }
    };

    return (
        <>
            <section className={`${styles.burgerConstructor} pt-25 mb-10`}>
                <ul className={`${styles.ingredients}`} onClick={openModal}>
                    <li className={`${styles.ingredient} ml-4`} id={topBottomIngredient?._id}>
                        <div className={`${styles.ingredientWrapper} pl-8 mb-4`}>
                            <ConstructorElement type="top" isLocked={true} text={`${topBottomIngredient?.name} (верх)`} price={topBottomIngredient?.price} thumbnail={topBottomIngredient?.image_mobile} />
                        </div>
                    </li>

                    <div className={`${styles.ingredientsMiddle} mb-4`}>{midList}</div>

                    <li className={`${styles.ingredient} ml-4`} id={topBottomIngredient?._id}>
                        <div className={`${styles.ingredientWrapper} pl-8`}>
                            <ConstructorElement type="bottom" isLocked={true} text={`${topBottomIngredient?.name} (низ)`} price={topBottomIngredient?.price} thumbnail={topBottomIngredient?.image_mobile} />
                        </div>
                    </li>
                </ul>

                <div className={`${styles.order} mb-10 ml-4 mr-4`}>
                    <div className={`${styles.total} mr-10`}>
                        <span className="mr-2 text text_type_digits-medium">610</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div onClick={openModal}>
                        <Button type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
                {ingredientModalState === true && (
                    <Modal modalState={ingredientModalState} closeModal={closeModal} closeModalByOverlay={closeModalByOverlay} closeModalByEscape={closeModalByEscape}>
                        <ModalIngredient info={currentIngredient} />
                    </Modal>
                )}
                {orderModalState === true && (
                    <Modal modalState={orderModalState} closeModal={closeModal} closeModalByOverlay={closeModalByOverlay} closeModalByEscape={closeModalByEscape}>
                        <ModalOrder />
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
