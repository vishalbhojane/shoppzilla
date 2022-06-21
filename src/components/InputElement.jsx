export const Checkbox = ({title, type, name}) => {
    return (
        <>
            <li>
                <label className="common-customCheck gender-label">
                    <input name={name} type={type} value={title} />{title}<div className="common-checkboxIndicator"></div>
                </label>
            </li>
        </>
    );
}