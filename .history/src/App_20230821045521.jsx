import './App.css'

const App = () => {

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  return (
    <>
      new one
    </>
  )
}

export default App
