import { FaPlus } from "react-icons/fa"

function AddItem() {
    return (
        <form className="addForm">
            <label>Add Item</label>
            <input
                autoFocus
                id="addItem"
                type="text"
                placeholder="Add Item"
                required
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