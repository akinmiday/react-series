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
  const handleClick3 = (e) => {
    console.log(e)
  }




  return (
    <>
      <p>Hello {handleNameChange()}!</p>
      <div>
        <button onClick={handleClick} >Click it</button>
        <button onClick={() => handleClick2('Akinmiday')} >Click it</button>
        <button onClick={(e) => handleClick3(e)} >Click it</button>
      </div>
    </>
  )
}

export default App