const Button = ({ onClick, ariaLabel, img }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="h-8 w-8 rounded-full bg-white p-1.5 hover:bg-blue-300 active:bg-blue-400"
    >
      <img className="h-5 w-5" src={img} />
    </button>
  );
};

export default Button;
