import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className='navbar' >
                <div className="btn-group">
                    {
                        menuList.map((categoryList) => {
                            return <button className="btn-group__item" onClick={() => filterItem(categoryList)}>{categoryList}</button>;
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;