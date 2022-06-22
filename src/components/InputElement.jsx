export const Checkbox = ({title, type, name}) => {
    return (
        <>
            <li>
                <label className="common-customCheckbox gender-label rel">
                    <input name={name} type={type} value={title} />{title}
                    <div className="common-checkboxIndicator"></div>
                </label>
            </li>
        </>
    );
}