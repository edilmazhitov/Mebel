import { FC } from 'react';
import { Link }  from 'react-router-dom';

import kitchenIcon from "../../icons/kitchen-icon.png";
import bedroomIcon from "../../icons/bedroom-icon.png";
import livingRoomIcon from "../../icons/livingroom-icon.png";
import closetIcon from "../../icons/closet-icon.png";
import officeIcon from "../../icons/office-icon.png";
import childrensRoomIcon from "../../icons/childrensroom-icon.png";




const Menu: FC = () => {
    return (
        <div className="menu-components">
            <div className="container">
                <div className="menu-components__block">
                    <nav className="menu-components__navigation">
                        <ul className="menu-components__list">
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={kitchenIcon}/>
                                    <h1 className="menu-components__list-text">Кухни</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={bedroomIcon}/>
                                    <h1 className="menu-components__list-text">Спальни</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={livingRoomIcon}/>
                                    <h1 className="menu-components__list-text">Гостинные</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={closetIcon}/>
                                    <h1 className="menu-components__list-text">Прихожие</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={officeIcon}/>
                                    <h1 className="menu-components__list-text">Офисная мебель</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <img className="menu-components__list-icon" src={childrensRoomIcon}/>
                                    <h1 className="menu-components__list-text">Детска</h1>
                                </Link>
                            </li>
                            <li className="menu-components__list-item">
                                <Link to="" className="menu-components-link">
                                    <h1 className="menu-components__list-text promotion">Акция</h1>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Menu;