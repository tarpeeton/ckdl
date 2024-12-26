import PortableText from '@sanity/block-content-to-react';

export default function AnalyzeInfo({ test, locale }) {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-4 text-neutral-400 mx-auto px-3">
      <h2 className="text-2xl font-bold text-black">
        
      {  locale === 'ru'
              ? 'Описание'
              : 'Tavsif'}
      </h2>
      {test.description[locale] ? (
        <PortableText blocks={test.description[locale]} />
      ) : (
        <p>
           {  locale === 'ru'
              ? 'Описание'
              : 'Tavsif'}
        </p>
      )}
    </div>
  );
}