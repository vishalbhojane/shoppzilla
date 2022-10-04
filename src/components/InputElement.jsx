export const Checkbox = ({title, type, name}) => {
    return (
        <>
            <li className="filter-element mb-5">
                <label className="common-customCheckbox gender-label rel">
                    <input name={name} type={type} value={title} />{title}
                    <div className="common-checkboxIndicator"></div>
                </label>
            </li>
        </>
    );
}