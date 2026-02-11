import { useState, useEffect } from "react";
interface Props {
  width?: string;
  bgColor?: string;
  height?: string;
  onSearchSubmit: (term: string) => void;
  initialSearchTerm?: string;
}

function Search({
  width = "w-[40vw]",
  bgColor = "bg-white/50",
  height = "h-auto",
  onSearchSubmit,
  initialSearchTerm = "",
}: Props) {
  const [localSearchTerm, setLocalSearchTerm] = useState(initialSearchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearchSubmit(localSearchTerm.trim());
  };

  useEffect(() => {
    setLocalSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  return (
    <div className={`flex justify-center items-center ${height}`}>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder="Search card name..."
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
