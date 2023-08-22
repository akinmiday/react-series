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

  const handleCheck = (id) => {
    setItems(!items.checked)
  }


  return (
    <>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id} >
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label>{item.item}</label>
            <FaTrashAlt
              role='button'
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App