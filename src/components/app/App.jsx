import React from "react";
import styles from "./app.module.scss";
import { AppHeader } from "../header/header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";

function App() {
    return (
        <div className={`${styles.appContainer}`}>
            <AppHeader />
            <main className={`${styles.main}`}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    );
}

export default App;
