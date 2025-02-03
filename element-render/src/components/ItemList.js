import { Fragment } from "react";

export default function ItemList() {
    const items = ['Apple','Banana','Orange'];

    return (
        <>
            {items.map( item => (<Fragment>
                    <h3>{item}</h3>
                    <p>아이템 상세내용 : {item}</p>
                </Fragment>)
            )}
        </>);
}