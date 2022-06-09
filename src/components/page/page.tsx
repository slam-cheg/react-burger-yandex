import React from "react";
import "./page.css";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";

export const Page = () => {
    return (
        <main className="page">
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    );
};
