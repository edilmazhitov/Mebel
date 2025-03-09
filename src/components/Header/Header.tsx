import { FC } from 'react';
import { GrFavorite } from "react-icons/gr";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";

import {Link} from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Navbar from "../Navbar/Navbar.tsx";
import {BsTelephone} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";

const Header: FC = () => {


    return (
        <header className="header">
            <Navbar />
            <div className="container">

                <div className="header__block">
                    <div className="header__right">
                        <Link to="/">
                            <img src={Logo} alt="Logo" width="113" height="25" aria-label="Logo"
                                 className="header__logo"/>
                        </Link>

                        <form className="header__search">
                            <button type="submit">
                                <IoSearchOutline className="header__search-icons"/>
                            </button>
                            <input type="search" required placeholder="Поиск" className="header__search-input"/>
                        </form>
                    </div>


                    <div className="header__left">
                        <div className="menu">
                            <div className="header__menu-left">
                                <Link className="header__contacts" to="">
                                    <BsTelephone className="header__contacts-icons"/>
                                    <a href="tel:8(964)999999" className="header__contacts-tel">8 (964) 89 99 119</a>
                                </Link>
                                <Link className="header__delivery" to="">
                                    <TbTruckDelivery className="header__delivery-icons"/>
                                    <h1 className="header__delivery-title">Доставка</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="header__user-bar user-bar">
                            <ul className="user-bar__menu">
                                <li className="user-bar__item">
                                    <Link to="/" className="user-bar__link">
                                        <GrFavorite className="user-bar__icons"/>
                                    </Link>
                                </li>
                                <li className="user-bar__item">
                                    <Link to="/" className="user-bar__link">
                                        <LiaShoppingBagSolid className="user-bar__icons"/>
                                    </Link>
                                </li>
                                <li className="user-bar__item">
                                    <Link to="/" className="user-bar__link">
                                        <LuUser className="user-bar__icons"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;