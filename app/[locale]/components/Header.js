import Navigation from '@/app/[locale]/components/Navigation'
import Logo from '@/app/[locale]/components/Logo'
import Tools from '@/app/[locale]/components/Tools'
import { useTranslations } from 'next-intl'

function Header({ locale }) {
  const t = useTranslations('Header.Navigation')

  const navOptions = [
    { id: 2, name: t('analyze'), url: 'https://interlab.uz' },
    { id: 2, name: t('ckdl'), url: '/' },
    { id: 5, name: t('addresses'), url: '/addresses' },
    { id: 3, name: t('analyzemobile'), url: '/analyze' },
    // { id: 4, name: t('doctors'), url: '/doctors' },
    { id: 6, name: t('about'), url: '/ckdl' }
  ]

  return (
    <header className='flex justify-center h-[90px] max-mdx:h-[70px] border items-center pr-2 lg:px-16 py-3 bg-white z-10 relative transition-all duration-150'>
      <div className='flex gap-5 max-mdx:gap-2 justify-between items-center w-full max-w-[1440px] relative transition-all duration-150'>
        <Logo />
        <Navigation locale={locale} navOptions={navOptions} />
        <Tools locale={locale} navOptions={navOptions} />
      </div>
    </header>
  )
}

export default Header
