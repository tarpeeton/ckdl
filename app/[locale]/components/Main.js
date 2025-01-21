"use client"
import React from "react";
import Banner from "./Main/Banner";
import Advantages from "./Main/Advantages";
import Map from "./MainMap";
import PopularAnalyze from "./PopularAnalyze";
import Instuction from "./Instuction";
import Application from "./Application";
import Blog from "./Blog";
import { useLocale, useTranslations  } from "next-intl";
import { useRef } from 'react'

export default function Main({ params }) {
  const t = useTranslations('Main');
  const mapRef = useRef(null);
  const locale = useLocale()

  const onClicktoReff = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  
  return (
    <main className="w-full flex flex-col gap-24 pb-24">
      <Banner onClick={onClicktoReff} />
      <div ref={mapRef}>
      <Map  />
      </div>
      <Advantages />
    
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <PopularAnalyze params={params} />
      </div>
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Instuction locale={locale} />
      </div>
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Application />
      </div>
      <div className="max-w-[1440px] px-2 mx-auto w-full">
        <h2 className="mt-52 text-3xl font-bold text-neutral-900 max-md:mt-24 max-md:max-w-full mb-0">
          {t("Blogs.title")}
        </h2>
        <Blog locale={params.locale} />
        <div className="w-full flex justify-center">
          <a
            href={`${params.locale}/blogs`}
            className="flex gap-2 justify-center self-center px-16 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-[52px]"
          >
            <span className="my-auto">{t("Blogs.more")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
