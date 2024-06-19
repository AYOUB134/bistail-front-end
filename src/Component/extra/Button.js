const Button = (props) => {
  const { newClass, btnColor, btnName, onClick, style, btnIcon, disabled} =
    props;

  return (
    <>
      <button
        className={`themeBtn text-center ${newClass}`}
        onClick={onClick}
        style={style}
        disabled={disabled}
       style={{ backgroundColor:"#ff00a8" , color:"#ffffff"}}
      >
     
        {btnIcon ? <>
          <i className={btnIcon}></i> <span className="ms-1">{btnName}</span> 
        </> : btnName}
      </button>
    </>
  );
};

export default Button;
