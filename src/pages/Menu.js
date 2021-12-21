import React from 'react'
import { Data } from "../data/Data"
import MenuItem from "../components/MenuItem"
import "../styles/Menu.css"
function Menu() {
    return (
        <div className="menu">

            <div className="menu-list">
                {Data.map((obj, key) => {
                    return (<MenuItem
                        key={key}
                        image={obj.image}
                        name={obj.name}
                        price={obj.price}
                    />
                    );
                })}
            </div>

        </div >
    )
}

export default Menu
