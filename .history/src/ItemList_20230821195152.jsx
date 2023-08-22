/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa"
const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <div></div>
            ))}
        </ul>
    )
}

export default ItemList