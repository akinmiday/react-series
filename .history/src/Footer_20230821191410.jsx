const Footer = ({ length }) => {

  return (
    <div>
      <p>{length} List {length === 1 ? "item"}  </p>
    </div>
  )
}

export default Footer