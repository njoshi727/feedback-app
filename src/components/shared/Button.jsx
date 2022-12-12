import PropTypes from "prop-types"

function Button({children,isDisabled,type,version,handleOnClick}) {
  return (
    <button onClick = {handleOnClick} type = {type} disabled = {isDisabled} className = {`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  isDisabled : false,
  type : 'button',
  version : 'primary'
}

Button.propTypes = {
  children : PropTypes.node.isRequired,
  isDisabled : PropTypes.bool,
  type : PropTypes.string,
  version : PropTypes.oneOf(['primary','secondary'])
}

export default Button