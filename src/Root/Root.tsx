import { FC } from 'react';
import Header from '../components/Header/Header';
import {Outlet} from "react-router-dom";

const Root: FC = () => {
    return (
        <>
              <Header />
              <Outlet />
        </>
    );
};

export default Root;