import Map from '@/app/[locale]/components/Addresses/Map'
import PopularAnalyze from '../components/PopularAnalyze'

export default function page({ params }) {
  return (
    <div className='w-full bg-white flex flex-col pb-36'>
      <Map />
      <div className='w-full max-w-[1440px] mt-24 px-2 mx-auto'>
        <PopularAnalyze params={params} />
      </div>
    </div>
  )
}
