function AddItem() {
    return (
        <form className="addForm">
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder="Add Item"
            />

        </form>
    )
}

export default AddItem