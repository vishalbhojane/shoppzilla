import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import {Checkbox} from "./InputElement";

const FilterGender = () => {
    const { genders, mainFilter } = useContext(ShopContext)

    return (
        <>
            <ul className="gender-list" onChange={(e) => { mainFilter(e) }}>
                {genders.map((el, i) => <Checkbox type='checkbox' title={el} key={i} name="gender"/>)}
            </ul>
        </>
    );
}

export default FilterGender;