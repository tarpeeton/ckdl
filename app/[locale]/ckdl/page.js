import AboutLicense from "../components/About/AboutLicense";
import Steps from "../components/ckdl/Steps";
import Map from "../components/MainMap";
import AboutBanner from '../components/About/AboutBanner';
import WhyWe from '../components/ckdl/WhyWe';
import Head from 'next/head';

export const metadata = {
  title: 'INTERMED — Современный медицинский центр в Ташкенте',
  description: `Клиника INTERMED сочетает традиции и инновации в медицине. Мы предлагаем профессиональные медицинские услуги, основанные на многолетнем опыте и современных технологиях. Свяжитесь с нами, чтобы заботиться о вашем здоровье.`,
 
};


export default function HomePage() {
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
    <div className="flex flex-col gap-24 slg:gap-24 bg-white px-2 pb-24 slg:pb-48">
      <AboutBanner />
      <WhyWe />
      <Map />
      <AboutLicense />
      <Steps />
     
    </div>
    
    </>
    
  );
}
