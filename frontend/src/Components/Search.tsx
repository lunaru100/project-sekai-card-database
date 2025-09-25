interface Props {
  width?: string;
  bgColor?: string;
  height?: string;
}

function Search({
  width = "w-[40vw]",
  bgColor = "bg-white/50",
  height = "h-auto",
}: Props) {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <form className="relative">
        <input
          type="text"
          className={`
            ${width}
            outline-none border-none rounded-[20px]
            !py-[2vh] !px-[7.5vh] h-[6vh] text-[2.5vh]
            ${bgColor} 
            backdrop-blur-sm text-[#0d2133]
          `}
        />
        <img
          src="/lupa.png"
          className="absolute h-[4vh] top-[20%] left-[2%] pointer-events-none"
        />
      </form>
    </div>
  );
}

export default Search;
