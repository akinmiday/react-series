import { useState } from 'react'
import './App.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

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
      <Header title="Groceries List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  )
}

export default App