import { useState } from "react";

const ACCOUNT_URLS = {
  EN: "https://nitter.net/ColorfulStageEN",
  JP: "https://nitter.net/pj_sekai",
  JPU: "https://nitter.net/pjsekai_eng",
  KR: "https://nitter.net/kr_pjsekai",
};

type ServerKey = keyof typeof ACCOUNT_URLS;

function News() {
  const [currentUrl, setCurrentUrl] = useState(ACCOUNT_URLS.JP);
  const handleServerChange = (serverKey: ServerKey) => {
    setCurrentUrl(ACCOUNT_URLS[serverKey]);
  };

  return (
    <div className="w-full m-0! p-0! flex flex-col items-center overflow-x-hidden">
      <span className="block text-center font-black text-[7vh] mt-[3vh] m-0! p-0!">
        VIEW NEWS
      </span>
      <div className="btnContainer">
        <button
          className="formBtn mr-2!"
          onClick={() => handleServerChange("EN")}
        >
          EN SERVER
        </button>
        <button
          className="formBtn ml-2! mr-2!"
          onClick={() => handleServerChange("JP")}
        >
          JP SERVER
        </button>
        <button
          className="formBtn ml-2! mr-2!"
          onClick={() => handleServerChange("JPU")}
        >
          JP SERVER (Translation)
        </button>
        <button
          className="formBtn ml-2! mr-2!"
          onClick={() => handleServerChange("KR")}
        >
          KR SERVER
        </button>
      </div>
      <iframe
        src={currentUrl}
        title="Tweets"
        className="tweet-iframe w-screen border-none rounded-t-2xl h-[67vh]"
      />
    </div>
  );
}

export default News;
