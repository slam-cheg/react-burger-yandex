import React from "react";
import "./burger-ingredients.css";
import { Tab, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ingredients = [
            {
                _id: "60666c42cc7b410027a1a9b1",
                name: "Краторная булка N-200i",
                type: "bun",
                proteins: 80,
                fat: 24,
                carbohydrates: 53,
                calories: 420,
                price: 1255,
                image: "https://code.s3.yandex.net/react/code/bun-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b5",
                name: "Говяжий метеорит (отбивная)",
                type: "main",
                proteins: 800,
                fat: 800,
                carbohydrates: 300,
                calories: 2674,
                price: 3000,
                image: "https://code.s3.yandex.net/react/code/meat-04.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b6",
                name: "Биокотлета из марсианской Магнолии",
                type: "main",
                proteins: 420,
                fat: 142,
                carbohydrates: 242,
                calories: 4242,
                price: 424,
                image: "https://code.s3.yandex.net/react/code/meat-01.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b7",
                name: "Соус Spicy-X",
                type: "sauce",
                proteins: 30,
                fat: 20,
                carbohydrates: 40,
                calories: 30,
                price: 90,
                image: "https://code.s3.yandex.net/react/code/sauce-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b4",
                name: "Мясо бессмертных моллюсков Protostomia",
                type: "main",
                proteins: 433,
                fat: 244,
                carbohydrates: 33,
                calories: 420,
                price: 1337,
                image: "https://code.s3.yandex.net/react/code/meat-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b9",
                name: "Соус традиционный галактический",
                type: "sauce",
                proteins: 42,
                fat: 24,
                carbohydrates: 42,
                calories: 99,
                price: 15,
                image: "https://code.s3.yandex.net/react/code/sauce-03.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b8",
                name: "Соус фирменный Space Sauce",
                type: "sauce",
                proteins: 50,
                fat: 22,
                carbohydrates: 11,
                calories: 14,
                price: 80,
                image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9bc",
                name: "Плоды Фалленианского дерева",
                type: "main",
                proteins: 20,
                fat: 5,
                carbohydrates: 55,
                calories: 77,
                price: 874,
                image: "https://code.s3.yandex.net/react/code/sp_1.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9bb",
                name: "Хрустящие минеральные кольца",
                type: "main",
                proteins: 808,
                fat: 689,
                carbohydrates: 609,
                calories: 986,
                price: 300,
                image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
                image_mobile: "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9ba",
                name: "Соус с шипами Антарианского плоскоходца",
                type: "sauce",
                proteins: 101,
                fat: 99,
                carbohydrates: 100,
                calories: 100,
                price: 88,
                image: "https://code.s3.yandex.net/react/code/sauce-01.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9bd",
                name: "Кристаллы марсианских альфа-сахаридов",
                type: "main",
                proteins: 234,
                fat: 432,
                carbohydrates: 111,
                calories: 189,
                price: 762,
                image: "https://code.s3.yandex.net/react/code/core.png",
                image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/core-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9be",
                name: "Мини-салат Экзо-Плантаго",
                type: "main",
                proteins: 1,
                fat: 2,
                carbohydrates: 3,
                calories: 6,
                price: 4400,
                image: "https://code.s3.yandex.net/react/code/salad.png",
                image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b3",
                name: "Филе Люминесцентного тетраодонтимформа",
                type: "main",
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: "https://code.s3.yandex.net/react/code/meat-03.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9bf",
                name: "Сыр с астероидной плесенью",
                type: "main",
                proteins: 84,
                fat: 48,
                carbohydrates: 420,
                calories: 3377,
                price: 4142,
                image: "https://code.s3.yandex.net/react/code/cheese.png",
                image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
                __v: 0,
            },
            {
                _id: "60666c42cc7b410027a1a9b2",
                name: "Флюоресцентная булка R2-D3",
                type: "bun",
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: "https://code.s3.yandex.net/react/code/bun-01.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                __v: 0,
            },
        ];
        const buns = [];
        const sauces = [];
        const main = [];
        ingredients.forEach((item) => {
            if (item.type === "bun") {
                buns.push(item);
            }
            if (item.type === "sauce") {
                sauces.push(item);
            }
            if (item.type === "main") {
                main.push(item);
            }
        });
        return (
            <div className="burger-ingredients pt-10 mb-10">
                <h1 className="burger-ingredients__title mb-5 text text_type_main-large">Соберите бургер</h1>
                <IngredientsTabs />
                <div className="burger-ingredients__wrapper">
                    <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Булки</h2>
                    <IngredientCards arr={buns} />
                    <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Соусы</h2>
                    <IngredientCards arr={sauces} />
                    <h2 className="burger-ingredients__title mb-6 text text_type_main-medium">Начинки</h2>
                    <IngredientCards arr={main} />
                </div>
            </div>
        );
    }
}

const IngredientsTabs = () => {
    const [current, setCurrent] = React.useState("one");
    return (
        <div style={{ display: "flex", boxSizing: "border-box", overflow: "hidden" }} className="mb-10 tabs">
            <Tab value="one" active={current === "one"} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === "two"} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === "three"} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    );
};

class IngredientCards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.arr.map((ingredient, index) => (
            <React.Fragment key={index}>
                <li className="ingredient-card mb-10">
                    <img src={ingredient.image} alt="" className="ingredient-card__img ml-4 mr-4" />
                    <div className="ingredient-card__price-wrapper mt-1 mb-1">
                        <p className="ingredient-card__price text text_type_digits-default pr-2">{ingredient.price}</p>
                        <div className="ingredient-card__currency">
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                    <p className="ingredient-card__title text text_type_main-default">{ingredient.name}</p>
                </li>
            </React.Fragment>
        ));
        return <ul className="burger-ingredients__cards ml-4 mr-2 mt-6 mb-6">{list}</ul>;
    }
}
