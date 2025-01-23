import Map from '@/app/[locale]/components/Addresses/Map'
import PopularAnalyze from '../components/PopularAnalyze'
import Head from 'next/head'



export const metadata = {
  title: 'Найдите ближайшую семейную поликлинику в Ташкенте — InterLab',
  description: `Удобный поиск ближайших семейных поликлиник в Ташкенте. Адреса, график работы и карта для быстрого доступа к медицинским услугам. InterLab — ваш надёжный помощник в поиске качественной медицины.`,
 
};


export default function page({ params }) {
  return (
    <>
     <Head>
    <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>
     <div className='w-full bg-white flex flex-col pb-36'>
      <Map />
      <div className='w-full max-w-[1440px] mt-24 px-2 mx-auto'>
        <PopularAnalyze params={params} />
      </div>
    </div>
    </>
   
  )
}
