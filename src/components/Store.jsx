import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import FilterBrand from "./FilterBrand";
import FilterCategory from "./FilterCategory";
import FilterGender from "./FilterGender";
import CardProduct from "./CardProduct";

const Store = () => {
    const { productsData} = useContext(ShopContext)

    return (
        <>
            <div className="store-container p-20-25">
                <section className="sidebar">
                    <h2>Filters</h2>
                    <FilterGender />
                    <FilterCategory />
                    <FilterBrand />
                </section>

                <section className="products-container">
                    {
                        productsData.map(el =><CardProduct key={el.id} data={el}/>)
                    }
                </section>
            </div>
        </>
    );
}

export default Store;