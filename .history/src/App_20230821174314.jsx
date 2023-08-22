import { useState } from 'react'
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
          <li className='item' >
            <input
              type='="checkbox'
              checked={item.checked}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App