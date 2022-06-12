import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { AppHeader } from "../header/header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";

function App() {
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        const config = {
            baseUrl: "https://norma.nomoreparties.space/api/ingredients",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const initialData = () => {
            fetch(config.baseUrl, {
                method: "GET",
                headers: config.headers,
            })
                .then(checkResponse)
                .then((res) => {
                    const ingredientsData = res.data;
                    setIngredients(ingredientsData);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        const checkResponse = (res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        };

        initialData();
    }, []);

    // useEffect(() => {
    //     console.log(ingredients);
    // });

    return (
        <div className={`${styles.appContainer}`}>
            <AppHeader />
            <main className={`${styles.main}`}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor ingredients={ingredients} />
            </main>
        </div>
    );
}

export default App;
