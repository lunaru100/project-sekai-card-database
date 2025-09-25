import Checkbox from "./Checkbox";
import MultiSelect from "./MultiSelect";
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

  const attributes = ["COOL", "CUTE", "PURE", "HAPPY", "MYSTERIOUS"];

  const costume = ["YES, WITH HAIRSTYLE", "YES, NO HAIRSTYLE", "NONE"];

  const characters: string[] = [
    "Airi Momoi",
    "Akito Shinonome",
    "An Shiraishi",
    "Ena Shinonome",
    "Haruka Kiritani",
    "Honami Mochizuki",
    "Ichika Hoshino",
    "Kohane Azusawa",
    "Mafuyu Asahina",
    "Minori Hanasato",
    "Mizuki Akiyama",
    "Nene Kusanagi",
    "Rui Kamishiro",
    "Saki Tenma",
    "Shiho Hinomori",
    "Shizuku Hinomori",
    "Toya Aoyagi",
    "Tsukasa Tenma",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [characterSelected, setCharacterSelected] = useState<string[]>([]);

  const toggleUnit = (unit: string) => {
    setSelected((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  return (
    <div className="flex flex-col gap-7 w-[20vw] min-h-[90vh] bg-gradient-to-b from-[#572C3C] to-[#DD0B34] !p-5">
      <div className="flex flex-col gap-2">
        <span className="formLabel">CHARACTERS</span>
        <MultiSelect
          options={characters}
          selected={characterSelected}
          setSelected={setCharacterSelected}
        />
      </div>
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
      <div className="flex flex-col gap-2">
        <span className="formLabel">ATTRIBUTES</span>
        <div className="flex flex-col gap-2">
          {attributes.map((attributes) => (
            <Checkbox
              key={attributes}
              label={attributes}
              checked={selected.includes(attributes)}
              onChange={() => toggleUnit(attributes)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="formLabel">COSTUME</span>
        <div className="flex flex-col gap-2">
          {costume.map((costume) => (
            <Checkbox
              key={costume}
              label={costume}
              checked={selected.includes(costume)}
              onChange={() => toggleUnit(costume)}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Filters;
