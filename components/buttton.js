const Button = ({ name, click, cssName }) => {
  return (
    <div>
      <button
        onClick={click}
        className={`p14 font-interstateRegular c-btn ${cssName} border-2 `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
