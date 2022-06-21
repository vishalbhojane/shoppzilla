import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import FilterBrand from "./FilterBrand";
import FilterCategory from "./FilterCategory";
import FilterGender from "./FilterGender";
import Card from "./Card";

const Store = () => {
    const { productsData } = useContext(ShopContext)

    return (
        <>
            <div className="store-container">
                <section className="sidebar">
                    <h1>Filter</h1>
                    <FilterGender />
                    <FilterCategory />
                    <FilterBrand />
                </section>

                <section className="products-container">
                    {
                        productsData.map(el =>
                            <Card key={el.id}>
                                <img className="product__img" src={el.image} alt=""/>
                                <h3 className="product__title">{el.brand}</h3>
                                <p className="product__desc">{el.description}</p>
                                <p className="product__price">{el.price}</p>
                            </Card>)
                    }
                </section>
            </div>
        </>
    );
}

export default Store;