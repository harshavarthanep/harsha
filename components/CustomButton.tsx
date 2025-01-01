const CustomButton = ({
  text,
  buttonStyles,
}: {
  text: string;
  buttonStyles: string;
}) => {
  return (
    <button
      className={`${buttonStyles} border border-accent group relative cursor-pointer overflow-hidden bg-accent uppercase`}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-primary-200 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className="ease relative text-black transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
