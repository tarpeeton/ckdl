import React from 'react'
import Banner from '../components/Partners/Banner'
import Profits from '../components/Partners/Profits'
import PriceCut from '../components/Partners/PriceCut'
import Calculator from '../components/Partners/Calculator'
import Application from '../components/Application'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Page({ params }) {
  const t = useTranslations('Main')

  return (
    <div className='w-full flex flex-col gap-48 bg-white pb-48'>
      <Banner />
      <div className='w-full max-w-[1440px] mx-auto'>
        <section className='mt-52 max-md:mt-24 w-full'>
          <div className='flex gap-5 flex-col lg:flex-row max-md:gap-0 '>
            <h2 className='text-3xl font-bold lg:hidden block text-neutral-900 max-md:max-w-full'>
              {t('About.title')}
            </h2>
            <div className='flex flex-col lg:w-6/12 max-md:ml-0 w-full'>
              <Image
                src='/images/interlab-logo.jpg'
                width={1000}
                height={1000}
                alt='Interlab logo'
                className='w-full h-full rounded-[45px]'
              />
            </div>
            <div className='flex flex-col justify-between ml-5 lg:w-6/12 max-md:ml-0 w-full'>
              <div className='flex flex-col font-bold max-md:mt-[25px] max-md:max-w-full slg:max-w-[568px]'>
                <h2 className='text-4xl hidden lg:block text-neutral-900 max-md:max-w-full font-bold mb-0'>
                  {t('About.title')}
                </h2>
                <p className='text-lg mt-5 text-zinc-600 font-medium max-md:max-w-full leading-5 slg:max-w-[508px]'>
                  {t('About.description')
                    .split('\n')
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </div>
              <div className='flex gap-3 mt-8 text-base text-center max-md:flex-wrap max-md:max-w-full'>
                <a
                  href={`/${params.locale}/about`}
                  className='justify-center self-start mdx:px-10 py-4 text-white bg-red-400 rounded-[100px] px-6 font-bold'
                >
                  {t('About.more')}
                </a>
                <a
                  href={`/${params.locale}/about/licenses`}
                  className='justify-center items-center px-16 py-4 text-red-400 whitespace-nowrap border border-red-400 border-solid rounded-[100px] max-md:px-10 font-bold'
                >
                  {t('About.license')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Profits />
      <PriceCut />
      <Calculator />
      <div className='w-full max-w-[1440px] mx-auto'>
        <Application />
      </div>
    </div>
  )
}
