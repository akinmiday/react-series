import './App.css'

const App = () => {

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  const handleClick = () => {
    console.log("you clicked it")
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }




  return (
    <>
      <p>Hello {handleNameChange()}!</p>
      <div>
        <button onClick={handleClick} >Click it</button>
        <button onClick={handleClick2} >Click it</button>
      </div>
    </>
  )
}

export default App