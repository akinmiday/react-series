import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import './App.css'

const App = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"

    }
  ])


  return (
    <>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id} >
            <input
              type='checkbox'
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App