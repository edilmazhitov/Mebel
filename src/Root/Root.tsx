import { FC } from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import {Outlet} from "react-router-dom";

const Root: FC = () => {
    return (
        <>
              <Header />
              <Menu />
              <Outlet />
        </>
    );
};

export default Root;