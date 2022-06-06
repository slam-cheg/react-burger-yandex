import React from "react";
import "./page.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

export default class Page extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <main className="page">
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        );
    }
}
