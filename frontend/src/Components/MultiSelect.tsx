import { useState, useRef, useEffect } from "react";

interface Props {
  options: string[];
  selected: string[];
  setSelected: (value: string[]) => void;
}

function MultiSelect({ options, selected, setSelected }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const borderRadius = open ? "6px 6px 0 0" : "6px";

  const toggleOption = (option: string) => {
    setSelected(
      selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full text-[#0d2133]" ref={ref}>
      <div className="relative">
        <div
          className=" rounded-md bg-white !p-1 !pl-1.5 cursor-pointer "
          onClick={() => setOpen(!open)}
          style={{ borderRadius }}
        >
          {selected.length > 0 ? selected.join(", ") : "Select Characters..."}
        </div>
        {open && (
          <div className="absolute mt-1 w-full  rounded-b-md bg-white shadow-md z-10 overflow-y-auto">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center !p-1.5 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="sr-only"
                />
                <div className="w-5 h-5 rounded-md flex flex-shrink-0 items-center justify-center border-2 border-[#0d2133] !mr-2">
                  {selected.includes(option) && (
                    <svg
                      className="w-3 h-3 text-[#0d2133]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiSelect;
