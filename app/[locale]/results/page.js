import Banner from '@/app/[locale]/components/Results/Banner'
import Request from '@/app/[locale]/components/Results/Request'
import Instructions from '@/app/[locale]/components/Results/Instructions'
import Blog from '@/app/[locale]/components/Blog'
import arrowRight from '@/public/svg/arrow-right.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Head from 'next/head'


export const metadata = {
  title: 'Результаты анализов онлайн — Удобно и быстро с ЦКДЛ',
  description: `Получите результаты ваших медицинских анализов онлайн, не посещая клинику. Удобный сервис, доступный 24/7. ЦКДЛ — точность, комфорт и современный подход к диагностике.  
  Получите результаты анализов онлайн с ЦКДЛ
Центр клинико-диагностической лаборатории (ЦКДЛ) предоставляет удобный сервис для получения результатов медицинских анализов. Вам больше не нужно посещать клинику — вся информация доступна онлайн в любое время.

Почему выбирают наш сервис:

Простота использования: достаточно ввести номер медицинской карты и регистрационный номер.
Высокая точность и надёжность: результаты подтверждены сертификатами качества.
Доступность 24/7: проверяйте результаты анализов в любое удобное время.
ЦКДЛ — это сочетание современных технологий и заботы о пациентах. Мы стремимся сделать медицинские услуги доступными и удобными для каждого.


  `

};



export default function HomePage({ params }) {
  const t = useTranslations('Main.Blogs')

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>

      <div>
        <Banner locale={params.locale} />
        <Request locale={params.locale} />
        <Instructions locale={params.locale} />
        <div className='w-full bg-white'>
          <div className='w-full max-w-[1440px] mx-auto py-12 flex flex-col gap-5'>
            <h2 className='text-4xl font-semibold mb-0'>{t('title')}</h2>
            <Blog locale={params.locale} />
            <a
              href={`/${params.locale}/blogs`}
              className='w-full flex justify-center'
            >
              <button className='flex gap-3 px-10 py-[10px] rounded-full font-semibold text-sm items-center border text-red-400 border-red-400'>
                {t('more')}
                <Image
                  src={arrowRight}
                  width={100}
                  height={100}
                  alt='Arrow right Red'
                  className='h-6 w-6'
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}
