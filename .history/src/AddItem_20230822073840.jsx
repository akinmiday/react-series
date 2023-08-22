import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

// eslint-disable-next-line react/prop-types
function AddItem({ newItem, setNewItem, handleSubmit }) {

    inputRef = useRef()

    return (
        <form className="addForm" onSubmit={handleSubmit} >
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                id="addItem"
                type="text"
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item">
                <FaPlus />
            </button>

        </form>
    )
}

export default AddItem