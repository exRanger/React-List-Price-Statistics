import "./PriceItem.scss";


export function CreateDate({ date, className }) {
    const creationDate = date.toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return (
        <>
            <h1>Addedss at</h1>
            <div className={className}>{creationDate}</div>
        </>
    );
}
