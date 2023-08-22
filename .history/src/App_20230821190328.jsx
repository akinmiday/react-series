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

  return (
    <>
      <Header title="Groceries List" />
      <Content
        items={items}
        setItems={setItems}
      />
      <Footer />
    </>
  )
}

export default App