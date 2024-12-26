import Banner from '@/app/[locale]/components/Legal/Banner'
import Info from '@/app/[locale]/components/Legal/Info'
import Benefits from '@/app/[locale]/components/Legal/Benefits'
import Contacts from '@/app/[locale]/components/Legal/Contacts'
import Application from '@/app/[locale]/components/Application'

export default function HomePage() {
  return (
    <div className='w-full bg-white flex flex-col gap-32 pb-32'>
      <Banner />
      <Info />
      <Benefits />
      <Contacts />
      <div className='w-full max-w-[1440px] mx-auto px-2'>
        <Application />
      </div>
    </div>
  )
}
