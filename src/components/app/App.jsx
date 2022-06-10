import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { AppHeader } from "../header/header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { initialData } from "../../utils/data";
// import { initialData } from "../../utils/data";

function App() {
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
                    const data = res.data;
                    console.log(data);
                    return data;
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
    });

    useState(() => {
        initialData();
        // console.log(data);
    });

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
