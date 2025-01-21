import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function Advantages() {
  const locale = useLocale()

  return (
    <div className='w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-6'>
      <h2 className='text-4xl font-semibold'>
        {locale === 'ru' ? 'Преимущества' : 'Afzalliklar'}
      </h2>
      <div className='w-full grid grid-cols-1 mdx:grid-cols-2 slg:grid-cols-6  gap-4'>
        <div className='rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 mdx:col-span-2 slg:col-span-3'>
          <div className='w-12 h-12'>
            <Image
              src='/images/main/ckdl/Vector.svg'
              width={100}
              height={100}
              className='w-full h-full'
              alt='Icon for Advantages'
            />
          </div>
          <h4 className='font-medium text-xl max-mdl:text-lg w-full max-w-[350px]'>
            {locale === 'ru'
              ? 'Заборные пункты во всех семейных поликлиниках города Ташкента'
              : 'Toshkent shahri barcha oilaviy poliklinikalarida tahlilni olish punktlari'}
          </h4>
        </div>
        <div className='rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-3'>
          <div className='w-12 h-12'>
            <Image
              src='/images/main/ckdl/Vector (1).svg'
              width={100}
              height={100}
              className='w-full h-full'
              alt='Icon for Advantages'
            />
          </div>
          <h4 className='font-medium text-xl max-mdl:text-lg w-full max-w-[350px]'>
            {locale === 'ru' ? 'Доступные цены' : 'Arzon narxlar'}
          </h4>
        </div>
        <div className='rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2'>
          <div className='w-12 h-12'>
            <Image
              src='/images/main/ckdl/Vector (2).svg'
              width={100}
              height={100}
              className='w-full h-full'
              alt='Icon for Advantages'
            />
          </div>
          <h4 className='font-medium text-xl max-mdl:text-lg w-full max-w-[350px]'>
            {locale === 'ru'
              ? 'Большой ассортимент анализов (1000+)'
              : 'Keng tahlillar assortimenti (1000+)'}
          </h4>
        </div>
        <div className='rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2'>
          <div className='w-12 h-12'>
            <Image
              src='/images/main/ckdl/Vector (3).svg'
              width={100}
              height={100}
              className='w-full h-full'
              alt='Icon for Advantages'
            />
          </div>
          <h4 className='font-medium text-xl max-mdl:text-lg w-full max-w-[350px]'>
            {locale === 'ru'
              ? ' Высокая точность результатов'
              : 'Natijalarining yuqori aniqligi'}
          </h4>
        </div>
        <div className='rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2'>
          <div className='w-12 h-12'>
            <Image
              src='/images/main/ckdl/Group.svg'
              width={100}
              height={100}
              className='w-full h-full'
              alt='Icon for Advantages'
            />
          </div>
          <h4 className='font-medium text-xl max-mdl:text-lg w-full max-w-[350px]'>
            {locale === 'ru'
              ? 'Получение результатов онлайн'
              : 'Natijalarni Oline Tarzda Olish'}
          </h4>
        </div>
      </div>
    </div>
  )
}
