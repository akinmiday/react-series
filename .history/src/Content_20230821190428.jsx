import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"

const Content = ([items, setItems]) => {



    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem("shoppinglist", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem("shoppinglist", JSON.stringify(listItems))
    }


    return (
        <>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id} >
                            <input
                                type='checkbox'
                                checked={item.checked}
                                onChange={() => handleCheck(item.id)}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role='button'
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }} >Your List is empty</p>
            )}
        </>
    )
}

export default Content