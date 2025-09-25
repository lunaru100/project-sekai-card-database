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

  const rarity = ["1 STAR", "2 STAR", "3 STAR", "4 STAR", "BIRTHDAY"];

  const availability = ["PERMANENT", "LIMITED", "BIRTHDAY", "COLLAB"];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleUnit = (unit: string) => {
    setSelected((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  return (
    <div className="flex flex-col gap-7 w-[20vw] min-h-[90vh] bg-gradient-to-b from-[#572C3C] to-[#DD0B34] !p-5">
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
      <div className="flex flex-col gap-2">
        <span className="formLabel">RARITY</span>
        <div className="flex flex-col gap-2">
          {rarity.map((rarity) => (
            <Checkbox
              key={rarity}
              label={rarity}
              checked={selected.includes(rarity)}
              onChange={() => toggleUnit(rarity)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="formLabel">AVAILABILITY</span>
        <div className="flex flex-col gap-2">
          {availability.map((availability) => (
            <Checkbox
              key={availability}
              label={availability}
              checked={selected.includes(availability)}
              onChange={() => toggleUnit(availability)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
