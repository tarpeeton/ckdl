import Banner from '../components/Instructions/Banner'
import List from '../components/Instructions/List'
import Rec from '../components/Instructions/Rec'
import Blog from '../components/Blog'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Page({ params }) {
  const t = useTranslations('Main.Blogs')
  return (
    <div className='w-full flex flex-col gap-48 bg-white pb-48'>
      <Banner />
      <Rec />
      <List locale={params.locale} />
      <div className='w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8'>
        <h2 className='text-4xl font-semibold'>{t('title')}</h2>
        <Blog locale={params.locale} />
        <div className='w-full flex justify-center'>
          <Link
            href={`/${params.locale}/blogs`}
            className='flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5'
          >
            <span className='my-auto'>{t('more')}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
