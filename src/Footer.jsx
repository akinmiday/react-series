// eslint-disable-next-line react/prop-types
const Footer = ({ length }) => {

  return (
    <div>
      <p>{length} List {length <= 1 ? "item" : "items"}  </p>
    </div>
  )
}

export default Footer