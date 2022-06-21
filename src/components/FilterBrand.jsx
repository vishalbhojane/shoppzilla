import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import {Checkbox} from "./InputElement";

const FilterBrand = () => {
    const { brands, mainFilter } = useContext(ShopContext)
    return (
        <>
            <h1>Brand</h1>
            <ul onChange={(e)=>{mainFilter(e)}}>
                {brands.map((el, i) => <Checkbox type='checkbox' title={el} key={i} name="brand"/>)}
            </ul>
        </>
    );
}

export default FilterBrand;