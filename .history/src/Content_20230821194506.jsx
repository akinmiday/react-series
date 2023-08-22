/* eslint-disable react/prop-types */

import ItemList from "./ItemList"


const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList />
            ) : (
                <p style={{ marginTop: '2rem' }} >Your List is empty</p >
            )}
        </>
    )
}

export default Content