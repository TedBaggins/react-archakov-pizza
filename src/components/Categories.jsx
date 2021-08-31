import {useState} from "react";

function Categories({items, onClickItem}) {

    const [activeItem, setActiveItem] = useState(null);
    const onSelectItem = (index) => {
        onClickItem(index);
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {
                    items.map((item, index) => (
                        <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={item + " " + index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;