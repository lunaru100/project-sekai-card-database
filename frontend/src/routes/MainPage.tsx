import Search from "../Components/Search";
import UnitTile from "../Components/UnitTile";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const units = [
    ["VIRTUAL SINGER", "/virtual_singers.png"],
    ["Leo/need", "/leo_need.png"],
    ["MORE MORE JUMP!", "/more_more_jump.png"],
    ["Vivid BAD SQUAD", "/vivid_bad_squad.png"],
    ["Wonderlands X Showtime", "/wonderlands.png"],
    ["Nightcord at 25", "/nightcord.png"],
  ];
  const navigate = useNavigate();

  const handleMainSearch = (searchTerm: string) => {
    if (searchTerm) {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      navigate(`/cards?search=${encodedSearchTerm}`);
    }
  };

  return (
    <div>
      <div className="max-w-full min-h-[90vh] bg-[100%_auto] bg-fixed bg-no-repeat flex flex-col items-center bg-[url(/rui_main_page_bg.png)]">
        <div className="h-[90vh] flex flex-col items-center">
          <span className="font-black text-6xl !mt-[20vh]">
            HAVE AN ACE UP YOUR SLEEVE
          </span>
          <Search height="h-[50vh]" onSearchSubmit={handleMainSearch} />
        </div>

        <div className="h-[90vh] flex flex-col items-center justify-center">
          <span className="font-black text-4xl !mb-10">
            CHOOSE <span className="font-light">UNIT</span>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
              <UnitTile name={unit[0]} img={unit[1]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
