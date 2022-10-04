import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import { Checkbox } from "./InputElement";

const FilterBrand = () => {
    const { brands, mainFilter } = useContext(ShopContext)
    return (
        <>
            <div className="filter-type mb-10">
                <h3 className="mb-5">Brand</h3>
                <ul className="brand-list ml-10" onChange={(e) => { mainFilter(e) }}>
                    {brands.map((el, i) => <Checkbox type='checkbox' title={el} key={i} name="brand" />)}
                </ul>
            </div>
        </>
    );
}

export default FilterBrand;