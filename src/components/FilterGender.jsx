import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import { Checkbox } from "./InputElement";

const FilterGender = () => {
    const { genders, mainFilter } = useContext(ShopContext)

    return (
        <>
            <div className="filter-type mb-10">
                <h3 className="mb-5">Gender</h3>
                <ul className="gender-list ml-10 text-capitalize" onChange={(e) => { mainFilter(e) }}>
                    {genders.map((el, i) => <Checkbox type='checkbox' title={el} key={i} name="gender" />)}
                </ul>
            </div>
        </>
    );
}

export default FilterGender;