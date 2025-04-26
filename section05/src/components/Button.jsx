const Button = ({ children, text, color = "black" }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleMouseEnter = () => {
    console.log("mouse entered");
  };

  return (
    <button
      onClick={handleClick}
      style={{ color: color }}
      //   onMouseEnter={handleMouseEnter}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
