import PropTypes from 'prop-types'
function Header({text}) {
  return (
<header ><div className="container">Feedback UI</div></header>
  )
}

Header.defaultProps={
    text: 'Header'
}
//set text prop to be a string
Header.propTypes={
    text: PropTypes.string
}
export default Header