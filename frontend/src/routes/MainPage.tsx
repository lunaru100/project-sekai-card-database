import Search from "../Components/Search";

function MainPage() {
  return (
    <div
      className={`max-w-full min-h-[90vh] bg-[100%_auto] bg-fixed bg-no-repeat flex flex-col items-center bg-[url(/rui_main_page_bg.png)]`}
    >
      <span className="font-black text-6xl !mt-[20vh]">
        HAVE AN ACE UP YOUR SLEEVE
      </span>
      <Search height="h-[50vh]" />
    </div>
  );
}

export default MainPage;
