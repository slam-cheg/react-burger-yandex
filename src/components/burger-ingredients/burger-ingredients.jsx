import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.scss";
import { IngredientCards } from "./ingredients-cards/ingredients-cards";
import { IngredientsTabs } from "./ingredients-tabs/ingredients-tabs";
import { Modal } from "../modal/modal";
import { ModalIngredient } from "../modal/modal-ingredient/modal-ingredient";

export const BurgerIngredients = ({ ingredients }) => {
    const [ingredientModalState, setModal] = useState(false);
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
            {ingredientModalState === true && (
                <Modal modalState={ingredientModalState} setModal={setModal}>
                    <ModalIngredient info={currentIngredient} />
                </Modal>
            )}
        </section>
    );
};

BurgerIngredients.propTypes = {
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
