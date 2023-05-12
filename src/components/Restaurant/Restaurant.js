import React, { useState } from "react";
import "../style.css";
import MenuApi from '../../MenuApi/MenuApi';
import Navbar from "../Navbar/Navbar";
import MenuCard from "./MenuCard";

const uniqueList = [
    ...new Set(
        MenuApi.map((uniqueItem) => {
            return uniqueItem.category;
        })
    ), 'All',
];

console.log(uniqueList);

export const Restaurant = () => {
    const [menuData, setMenuData] = useState(MenuApi);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(MenuApi);
            return;
        }
        const updatedList = MenuApi.filter((menuItem) => {
            return menuItem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};
