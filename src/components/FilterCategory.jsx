import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import { Checkbox } from "./InputElement";

const FilterCategory = () => {
    const { categories, mainFilter } = useContext(ShopContext)

    return (
        <>
            <div className="filter-type mb-10">
                <h3 className="mb-5">Categories</h3>
                <ul className="category-list ml-10 text-capitalize" onChange={(e) => { mainFilter(e) }}>
                    {categories.map((el, i) => <Checkbox type={'checkbox'} title={el} key={i} name="category" />)}
                </ul>
            </div>
        </>
    );
}

export default FilterCategory;