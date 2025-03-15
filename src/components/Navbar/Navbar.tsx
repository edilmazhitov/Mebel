import { TbTruckDelivery } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";

import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar__menu">
            <div className="container">
                <div className="navbar__menu-block">
                    <div className="navbar__menu-right">
                        <ul className="navbar__menu-list">
                            <li className="navbar__menu-item">
                                <a href="" className="navbar__link">Главная</a>
                            </li>
                            <li className="navbar__menu-item">
                                <a href="" className="navbar__link">О нас</a>
                            </li>
                            <li className="navbar__menu-item">
                                <a href="" className="navbar__link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__menu-left">
                        <Link className="navbar__contacts" to="tel:8(964)999999">
                            <span><BsTelephone className="navbar__contacts-icons"/></span>
                            <p className="navbar__contacts-tel">8 (964) 89 99 119</p>
                        </Link>
                        <Link className="navbar__delivery" to="">
                            <span><TbTruckDelivery className="navbar__delivery-icons"/></span>
                            <h1 className="navbar__delivery-title">Доставка</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;