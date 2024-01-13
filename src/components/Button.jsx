const Button = ({ onClick, ariaLabel, img }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="h-8 w-8 rounded-full bg-white p-1.5 border-2 border-slate-200 flex hover:bg-blue-300 hover:border-slate-400 active:bg-blue-400"
    >
      <img className="h-5 w-5 self-center" src={img} />
    </button>
  );
};

export default Button;
