import {Categories, PizzaBlock, SortPopup} from "../components";
import React from "react";

function Home({items}) {

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(item) => console.log(item)} items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj}/>
                ))}
            </div>
        </div>
    )
}

export default Home;