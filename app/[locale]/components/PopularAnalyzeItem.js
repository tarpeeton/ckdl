"use client";
import HouseCall from "./Modals/HouseCall";
import { useState } from "react";

export default function PopularAnalyzeItem({ locale, title}) {
  const [houseCall, setHouseCall] = useState(false);

  return (
    <>
      {houseCall ? <HouseCall setState={setHouseCall} /> : <></>}
      <div
        className="w-full flex flex-col justify-between p-4 gap-24 border border-[#E4E4E4] rounded-3xl"
      >
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="w-full flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setHouseCall(true);
            }}
            className="text-lg text-white font-semibold rounded-full py-2 px-4 bg-[#FB6A68]"
          >
            {locale === 'ru' ? "Сдать из дома" : "Uyga Chaqirish"}
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="w-full flex justify-between">
        {price != null ? (
          <p className="bg-rose-100 text-rose-400 font-bold py-1 rounded-full px-4">
            {formattedPrice} сум
          </p>
        ) : <div></div>}
        <div>
          <Image
            src={backet}
            width={100}
            height={100}
            alt="Basket Icon"
            className="w-8 h-8"
          />
        </div>
      </div> */
}
