import Search from "../Components/Search";
import UnitTile from "../Components/UnitTile";

function MainPage() {
  const units = [
    ["VIRTUAL SINGER", "/virtual_singers.png"],
    ["LEO/NEED", "/leo_need.png"],
    ["MORE MORE JUMP", "/more_more_jump.png"],
    ["VIVID BAD SQUAD", "/vivid_bad_squad.png"],
    ["WONDERLANDS x SHOWTIME", "/wonderlands.png"],
    ["25_JI, NIGHTCORD DE.", "/nightcord.png"],
  ];

  return (
    <div>
      <div className="relative max-w-full min-h-[90vh] bg-[100%_auto] bg-fixed bg-no-repeat flex flex-col items-center bg-[url(/rui_main_page_bg.png)]">
        <span className="font-black text-6xl !mt-[20vh]">
          HAVE AN ACE UP YOUR SLEEVE
        </span>
        <Search height="h-[50vh]" />

        <div className="h-[90vh] flex flex-col items-center justify-center">
          <span className="font-black text-4xl ">
            CHOOSE <span className="font-light">UNIT</span>
          </span>
          <div className="flex gap-5 mt-5">
            {units.map((unit) => (
              <UnitTile name={unit[0]} img={unit[1]} />
            ))}
          </div>
        </div>

        {/*<div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#143e40] to-transparent"></div>*/}
      </div>
    </div>
  );
}

export default MainPage;
