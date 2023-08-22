const Footer = () => {
  const year = new Date()
  return (
    <div>
      <p>{`CopyRight &copy; ${year.getFullYear()}`} </p>
    </div>
  )
}

export default Footer