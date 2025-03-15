import { FC } from 'react';
import SwiperImage from "../../components/SwiperImage/SwiperImage";
import Products from "../../components/Products/Products"

const Home: FC = () => {
    return (
        <main>
            <div className="container">
                <SwiperImage />
            </div>
            <section className="bestsellers">
                <div className="container">
                    <h1 className="bestsellers__title">Хиты продаж</h1>
                    <Products />
                </div>
            </section>
        </main>
    );
};

export default Home;