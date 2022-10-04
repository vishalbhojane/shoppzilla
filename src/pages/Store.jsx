import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import FilterBrand from "../components/FilterBrand";
import FilterCategory from "../components/FilterCategory";
import FilterGender from "../components/FilterGender";
import ProductStore from "../components/ProductStore";

const Store = () => {
    const { productsData, screenWidth } = useContext(ShopContext)

    return (
        <>
            <div className="store-container rel p-20-25">
                <section className="sidebar filters-wrap rel">
                    <h2>Filters</h2>
                    <div className={screenWidth < 1025 ? "less" : "more"}>
                        <FilterGender />
                        <FilterCategory />
                        <FilterBrand />
                    </div>
                </section>

                <section className="products-container">
                    {
                        productsData.map(el => <ProductStore key={el.id} data={el} wlPg={false} />)
                    }
                </section>
            </div>
        </>
    );
}

export default Store;