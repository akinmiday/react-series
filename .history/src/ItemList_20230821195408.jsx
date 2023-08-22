/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa"
import LineItem from "./LineItem"

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList