'use client'

import PopularAnalyzeItem from '@/app/[locale]/components/PopularAnalyzeItem'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import axios from 'axios'

export default function PopularAnalyze() {
  const t = useTranslations()
  const locale = useLocale()
  const [filteredTests, setFilteredTests] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [loadingTests, setLoadingTests] = useState(false)

  useEffect(() => {
    const fetchDataOfApi = async () => {
      try {
        setLoadingTests(true)
        const response = await axios.post('/api/proxy', {
          userName: 'INTERMED',
          password: 'IN12TER34MED56',
          language: locale === 'ru' ? 2 : 1
        })

        const testsData = response.data.data // Dastlabki ma'lumot

        const excludedCategories = [
          'Терапевт',
          'Невропатолог',
          'Процедура',
          'ЛОР'
        ]
        const filteredCategories = testsData.filter(
          test => !excludedCategories.includes(test.testSectionName)
        )

        // Unikal kategoriyalarni olish
        const uniqueCategories = [
          ...new Set(filteredCategories.map(test => test.testSectionName))
        ]

        // Birinchi kategoriyani o'rnatamiz
        if (uniqueCategories.length > 0) {
          setFilteredTests(
            filteredCategories.filter(
              test => test.testSectionName === uniqueCategories[0]
            )
          )
        }

        setLoadingTests(false)
      } catch (error) {
        console.error('Ошибка при получении данных анализов:', error)
        setLoadingCategories(false)
        setLoadingTests(false)
      }
    }

    fetchDataOfApi()
  }, [locale])

  if (loadingTests) {
    return (
      <div className='mt-[20px] lg:mt-[40px] flex items-center justify-center'>
        {locale === 'ru' ? 'Загруска.....' : 'Yuklanyapti.....'}
      </div>
    )
  }

  return (
    <div className='w-full max-w-[1440px] flex flex-col gap-5'>
      <div className='flex flex-col items-start'>
        <p className=' text-rose-400 flex gap-2 text-xl items-center font-semibold '>
          <Image
            src={'/svg/clock.svg'}
            width={100}
            height={100}
            alt='Clock Icon'
            className='w-5'
          />{' '}
          {t('Main.Popular-analyze.graphic')}
        </p>
        <h2 className='font-bold text-3xl'>
          {t('Main.Popular-analyze.title')}
        </h2>
        <p className='text-neutral-400 w-full max-w-[400px]'>
          {t('Main.Popular-analyze.description')}
        </p>
      </div>
      <div className='w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Link
          href={`https://interlab.uz/ru/check-up`}
          className='w-full flex flex-col justify-between bg-[#FFEFEF] p-4 rounded-3xl'
        >
          <div>
            <h3 className='font-bold text-2xl text-[#FB6A68]'>
              {locale === 'ru' ? (
                <>
                  Комплексные чек-апы — <br /> это выгодно!
                </>
              ) : (
                <>
                  Kompleks chek-aplar — <br /> bu foydali!
                </>
              )}
            </h3>
            <p className='text-[#DC7777] w-full max-w-[360px]'>
              {locale === 'ru'
                ? ' Сдавайте несколько анализов одновременно для комплексной проверки здоровья и экономии средств.'
                : ''}
            </p>
          </div>

          <div className='w-full flex gap-2'>
            <button className='text-lg text-white font-semibold rounded-full py-2 px-12 bg-[#FB6A68]'>
              {locale === 'ru' ? 'Перейти' : 'Batafsil'}
            </button>
          </div>
        </Link>
        {filteredTests
          .slice(0, 5)
          .reverse()
          .map((test, index) => (
            <PopularAnalyzeItem
              locale={locale}
              key={index}
              title={test.testSectionName}
            />
          ))}
      </div>
      <div className='w-full flex justify-center'>
        <a
          href={`/${locale}/analyze`}
          className='flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5'
        >
          <span className='my-auto'>{t('Main.Popular-analyze.all')}</span>
          <Image
            src={'/svg/arrow-right.svg'}
            width={100}
            height={100}
            alt='Right Red Arrow'
            className='w-6'
          />
        </a>
      </div>
    </div>
  )
}
