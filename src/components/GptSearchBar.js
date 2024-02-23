import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    //from here call to gpt api

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: e.target.value }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices)
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 text-white bg-red-700 py-2 px-4 m-4 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
