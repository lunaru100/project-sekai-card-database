import Checkbox from "./Checkbox";
import MultiSelect from "./MultiSelect";
import { useState, useEffect } from "react";

interface FiltersState {
  selectedUnits: string[];
  selectedRarities: string[];
  selectedCharacters: string[];
  selectedAvailability: string[];
  selectedAttributes: string[];
  searchTerm: string;
}

interface FiltersProps {
  initialFilters: FiltersState;
  onApply: (filters: FiltersState) => void;
  onReset: () => void;
}

function Filters({ initialFilters, onApply, onReset }: FiltersProps) {
  const units = [
    "VIRTUAL SINGER",
    "Leo/need",
    "MORE MORE JUMP!",
    "Vivid BAD SQUAD",
    "Wonderlands X Showtime",
    "Nightcord at 25",
  ];

  const rarity = ["1 STAR", "2 STAR", "3 STAR", "4 STAR", "BIRTHDAY"];

  const availability = [
    "Permanent",
    "Limited",
    "Colorful Festival limited",
    "Collaboration limited",
    "Birthday limited",
    "Unit-Limited",
    "Bloom Festival limited",
  ];

  const attributes = ["Cool", "Cute", "Pure", "Happy", "Mysterious"];

  //const costume = ["YES, WITH HAIRSTYLE", "YES, NO HAIRSTYLE", "NONE"];

  const characters: string[] = [
    "Hatsune Miku",
    "Kagamine Rin",
    "Kagamine Len",
    "Megurine Luka",
    "MEIKO",
    "KAITO",
    "Hoshino Ichika",
    "Tenma Saki",
    "Mochizuki Honami",
    "Hinomori Shiho",
    "Hanasato Minori",
    "Kiritani Haruka",
    "Momoi Airi",
    "Hinomori Shizuku",
    "Azusawa Kohane",
    "Shiraishi An",
    "Shinonome Akito",
    "Aoyagi Toya",
    "Tenma Tsukasa",
    "Otori Emu",
    "Kusanagi Nene",
    "Kamishiro Rui",
    "Yoisaki Kanade",
    "Asahina Mafuyu",
    "Shinonome Ena",
    "Akiyama Mizuki",
  ];

  const [localSelectedUnits, setLocalSelectedUnits] = useState<string[]>(
    initialFilters.selectedUnits
  );
  const [localSelectedRarities, setLocalSelectedRarities] = useState<string[]>(
    initialFilters.selectedRarities
  );
  const [localSelectedCharacters, setLocalSelectedCharacters] = useState<
    string[]
  >(initialFilters.selectedCharacters);
  const [localSelectedAvailability, setLocalSelectedAvailability] = useState<
    string[]
  >(initialFilters.selectedAvailability);
  const [localSelectedAttributes, setLocalSelectedAttributes] = useState<
    string[]
  >(initialFilters.selectedAttributes);

  useEffect(() => {
    setLocalSelectedUnits(initialFilters.selectedUnits);
    setLocalSelectedRarities(initialFilters.selectedRarities);
    setLocalSelectedCharacters(initialFilters.selectedCharacters);
    setLocalSelectedAvailability(initialFilters.selectedAvailability);
    setLocalSelectedAttributes(initialFilters.selectedAttributes);
  }, [initialFilters]);

  const toggleUnit = (unit: string) => {
    setLocalSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  const toggleRarity = (rarity: string) => {
    setLocalSelectedRarities((prev) =>
      prev.includes(rarity)
        ? prev.filter((r) => r !== rarity)
        : [...prev, rarity]
    );
  };

  const toggleSelection = (
    item: string,
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setFunction((prev) =>
      prev.includes(item) ? prev.filter((u) => u !== item) : [...prev, item]
    );
  };

  const handleApplyClick = () => {
    const newFilters: FiltersState = {
      selectedUnits: localSelectedUnits,
      selectedRarities: localSelectedRarities,
      selectedCharacters: localSelectedCharacters,
      selectedAvailability: localSelectedAvailability,
      selectedAttributes: localSelectedAttributes,
      searchTerm: initialFilters.searchTerm,
    };
    onApply(newFilters);
  };

  const handleResetClick = () => {
    /*setLocalSelectedUnits([]);
    setLocalSelectedCharacters([]);
    setLocalSelectedRarities([]);
    setLocalSelectedAvailability([]);
    setLocalSelectedAttributes([]);*/
    onReset();
  };

  useEffect(() => {
    setLocalSelectedUnits(initialFilters.selectedUnits);
    setLocalSelectedRarities(initialFilters.selectedRarities);
    setLocalSelectedCharacters(initialFilters.selectedCharacters);
    setLocalSelectedAvailability(initialFilters.selectedAvailability);
    setLocalSelectedAttributes(initialFilters.selectedAttributes);
  }, [initialFilters]);

  return (
    <div className="flex flex-col gap-7 w-[20vw] h-[90vh] bg-gradient-to-b from-[#572C3C] to-[#DD0B34] !p-5 !pr-0 fixed top-[10vh] left-0">
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-7 !mb-2">
        <div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">CHARACTERS</span>
          <MultiSelect
            options={characters}
            selected={localSelectedCharacters}
            setSelected={setLocalSelectedCharacters}
          />
        </div>
        <div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">UNIT</span>
          <div className="flex flex-col gap-2">
            {units.map((unit) => (
              <Checkbox
                key={unit}
                label={unit}
                checked={localSelectedUnits.includes(unit)}
                onChange={() => toggleUnit(unit)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">RARITY</span>
          <div className="flex flex-col gap-2">
            {rarity.map((rarity) => (
              <Checkbox
                key={rarity}
                label={rarity}
                checked={localSelectedRarities.includes(rarity)}
                onChange={() => toggleRarity(rarity)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">AVAILABILITY</span>
          <div className="flex flex-col gap-2">
            {availability.map((availability) => (
              <Checkbox
                key={availability}
                label={availability}
                checked={localSelectedAvailability.includes(availability)}
                onChange={() =>
                  toggleSelection(availability, setLocalSelectedAvailability)
                }
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">ATTRIBUTES</span>
          <div className="flex flex-col gap-2">
            {attributes.map((attributes) => (
              <Checkbox
                key={attributes}
                label={attributes}
                checked={localSelectedAttributes.includes(attributes)}
                onChange={() =>
                  toggleSelection(attributes, setLocalSelectedAttributes)
                }
              />
            ))}
          </div>
        </div>
        {/*<div className="flex flex-col gap-2 !pr-5">
          <span className="formLabel">COSTUME</span>
          <div className="flex flex-col gap-2">
            {costume.map((costume) => (
              <Checkbox
                key={costume}
                label={costume}
                checked={localSelectedUnits.includes(costume)}
                onChange={() => toggleUnit(costume)}
              />
            ))}
          </div>
        </div>*/}
      </div>
      <div className="flex gap-4 !mb-2 !pr-5">
        <button className="formBtn !w-[50%] !m-0" onClick={handleResetClick}>
          RESET
        </button>
        <button className="formBtn !w-[50%] !m-0" onClick={handleApplyClick}>
          APPLY
        </button>
      </div>
    </div>
  );
}

export default Filters;
