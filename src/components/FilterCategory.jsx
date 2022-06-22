import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import {Checkbox} from "./InputElement";

const FilterCategory = () => {
    const { categories, mainFilter } = useContext(ShopContext)

    return (
        <>
            <h1>Categories</h1>
            <ul className="category-list ml-10 text-capitalize" onChange={(e)=>{mainFilter(e)}}>
                {categories.map((el,i) => <Checkbox type={'checkbox'} title={el} key={i} name="category"/>)}
            </ul>
        </>
    );
}

export default FilterCategory;