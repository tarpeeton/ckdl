import successIcon from "@/public/images/house-call-success.png"
import Image from "next/image";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import { useLocale } from 'next-intl'

export default function SuccessResult() {
  const locale = useLocale()

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:w-[320px] w-[450px] relative">
        <button
          className="absolute top-5 right-5"
        >
          <Image
            priority
            className="w-4 h-4"
            src={closeicongray}
            width={100}
            height={100}
            alt="Interlab innovation"
            quality={100}
          />
        </button>
        <div className="flex items-center flex-col gap-3 slg:gap-5">
            <Image
            src={successIcon}
            width={500}
            height={500}
            alt="Succes Icon White red"
            className="w-24 h-24"
            />
          <div className="flex flex-col text-center gap-1 px-8 lg:px-12">
            <h3 className="text-rose-400 max-md:text-2xl text-3xl font-semibold">
              
              {locale === 'ru'
              ? 'Спасибо!'
              : 'Raxmat !'}
            </h3>
            <p className="text-neutral-400 text-sm ">
              
            {locale === 'ru'
  ? 'Ваша заявка получена. Вам перезвонят в течении 5 минут, для подтверждения записи'
  : 'Arizangiz qabul qilindi. Sizga 5 daqiqa ichida qayta qo\'ng\'iroq qilinadi, ro\'yxatni tasdiqlash uchun.'}

            </p>
          </div>
          <button
            type="submit"
            className="justify-center px-10 py-3 mt-6 font-bold text-center text-white bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-[100px] max-md:px-5 mdx:w-[300px] lg:w-[250px] w-[80%]"
          >
            Ок
          </button>
        </div>
      </div>
    </div>
  );
}
