import Checkbox from "./Checkbox";
import { useState } from "react";

function Filters() {
  const units = [
    "VIRTUAL SINGER",
    "LEO/NEED",
    "MORE MORE JUMP",
    "VIVID BAD SQUAD",
    "WONDERLANDS x SHOWTIME",
    "25_JI, NIGHTCORD DE.",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleUnit = (unit: string) => {
    setSelected((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  return (
    <div className="flex flex-col gap-3 w-[20vw] min-h-[90vh] bg-gradient-to-b from-[#572C3C] to-[#DD0B34] !p-5">
      <div className="flex flex-col gap-2">
        <span className="formLabel">UNIT</span>
        <div className="flex flex-col gap-2">
          {units.map((unit) => (
            <Checkbox
              key={unit}
              label={unit}
              checked={selected.includes(unit)}
              onChange={() => toggleUnit(unit)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
