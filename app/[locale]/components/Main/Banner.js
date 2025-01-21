import React from "react";
import Image from "next/image";
import { useLocale } from 'next-intl'

export default function Banner({onClick}) {
  const locale = useLocale()

  return (
    <section
      style={{
        backgroundImage: `url('/images/main/bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
      }}
      className="slg:h-screen-90 flex max-slg:flex-col"
    >
      <div className="w-full max-w-[1440px] px-2 mx-auto flex max-slg:flex-col items-center max-slg:pb-8 justify-between">
        <div className="flex-1 h-full flex flex-col justify-center slg:gap-12 py-8">
          <div>
            <h1 className="text-5xl w-full max-w-[600px] max-mdx:text-4xl font-bold text-[#FB6A68]">
              {locale === 'ru' ? "Сдавайте более 1000 анализов в вашей семейной поликлинике" : "Oilaviy poliklinikangizda 1000 dan ortiq tahlil topshiring"}
              </h1>
            <p className="text-[#989898]">
              
              {locale === 'ru' ? "Близко, точно и доступно" : "Yaqin, aniq va arzon"}
            </p>
          </div>
          <button onClick={onClick}  className="self-start px-12 py-3 text-white font-semibold bg-[#FB6A68] rounded-full max-mdx:px-4">
            
            {locale === 'ru' ? "Поиск ближайщей поликлиники" : "Eng yaqin poliklinikani qidirish"}

          </button>
        </div>
        <div className="relative flex-1 w-full h-full max-slg:w-full max-slg:min-h-[300px]">
          <Image
            src={"/images/main/Mask group.png"}
            fill
            quality={100}
            className="object-contain"
            alt="Main Banner Photo"
          />
        </div>
      </div>
    </section>
  );
}