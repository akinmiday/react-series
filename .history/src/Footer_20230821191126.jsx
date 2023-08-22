const Footer = ({ length }) => {
  const year = new Date()
  return (
    <div>
      <p>CopyRight &copy; {year.getFullYear()} {length} </p>
    </div>
  )
}

export default Footer