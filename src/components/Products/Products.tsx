import {FC, useEffect} from 'react';
import { getAllProducts } from "../../store/reducers/products.ts";
import {useDispatch, useSelector} from "react-redux";
import {ProductDataType} from "../../store/reducers/products";

import { MdOutlineLocalGroceryStore, MdFavoriteBorder  } from "react-icons/md";

const Products: FC = () => {



    type ProductsState = {
        data: ProductDataType[];
    }
    type RootState = {
        products: ProductsState
    }

    const dispatch = useDispatch()

    const { data } = useSelector((s: RootState) => s.products)

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllProducts());
    }, [dispatch])


    return (
        <div className="products">
            {
                data.map((item: any) => (
                    <div className="products__block" key={item.id}>
                        <button className="products__add-to-favorites">
                            <MdFavoriteBorder className="icon"/>
                        </button>
                        <br/>
                        <img src={item.imageUrl} alt="" className="products__image"/>
                        <h1 className="products__title">{item.title}</h1>
                        <p className="products__type">{item.type}</p>
                        <div className="products__wrapper">
                            <p className="products__price">{item.price.toLocaleString('ru-RU')}₽</p>
                            <button className="products__add-to-cart" aria-label="Добавить в корзину">
                                <MdOutlineLocalGroceryStore  className="icon"/>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;