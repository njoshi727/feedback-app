import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className='container' style={headerStyles}>
      <h2>{text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.prototypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Header;
