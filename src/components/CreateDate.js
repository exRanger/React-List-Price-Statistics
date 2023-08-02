import "./PriceItem.scss";

<<<<<<< HEAD
const PI = 24;

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
=======
export function CreateDate({date, className}) {
    const creationDate = date.toLocaleDateString('en-GB', {month: 'long', day: 'numeric', year: 'numeric'});
    return <>
         <h1>Added at</h1>
         <div className={className}>{creationDate}</div>
    </>
}
>>>>>>> e82a49c6c0957068bbd7c40f22d6c3b912566373
