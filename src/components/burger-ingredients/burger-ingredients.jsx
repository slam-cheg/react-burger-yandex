import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.scss";
import { IngredientCards } from "./ingredients-cards/ingredients-cards";
import { IngredientsTabs } from "./ingredients-tabs/ingredients-tabs";
import { Modal } from "../modal/modal";
import { ModalIngredient } from "../modal/modal-ingredient/modal-ingredient";

export const BurgerIngredients = ({ ingredients }) => {
    const [opened, setModal] = useState(false);
    const [currentIngredient, setIngredient] = useState();

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

    const openModal = (evt) => {
        const currentCard = evt.target.closest("li");
        const currentIngredient = ingredients.find((ingr) => ingr._id === currentCard.id);
        setIngredient(currentIngredient);
        setModal(true);
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
        <section className={`${styles.burgerIngredients} pt-10 mb-10`}>
            <h1 className={`mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <IngredientsTabs />
            <div className={`${styles.wrapper}`} onClick={openModal}>
                <h2 className={`mb-6 text text_type_main-medium`}>Булки</h2>
                <IngredientCards arr={buns} />
                <h2 className={`mb-6 text text_type_main-medium`}>Соусы</h2>
                <IngredientCards arr={sauces} />
                <h2 className={`mb-6 text text_type_main-medium`}>Начинки</h2>
                <IngredientCards arr={mainIngr} />
            </div>
            {opened === true && (
                <Modal opened={opened} closeModal={closeModal} closeModalByOverlay={closeModalByOverlay} closeModalByEscape={closeModalByEscape}>
                    <ModalIngredient info={currentIngredient} />
                </Modal>
            )}
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
};
