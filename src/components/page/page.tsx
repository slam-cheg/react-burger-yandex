import React from "react";
import "./page.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

export default class Page extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <main className="page">
                <BurgerIngredients />
            </main>
        );
    }
}
