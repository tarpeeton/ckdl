import AboutLicense from "../components/About/AboutLicense";
import Blog from "../components/Blog";
import Steps from "../components/ckdl/Steps";
// import { useTranslations } from "next-intl";
import Map from "../components/MainMap";
// import Application from "../components/Application";
// import Social from "../components/ckdl/Social";
import AboutBanner from '../components/About/AboutBanner';
import WhyWe from '../components/ckdl/WhyWe';

export default function HomePage({ params }) {
  return (
    <div className="flex flex-col gap-24 slg:gap-24 bg-white px-2 pb-24 slg:pb-48">
      <AboutBanner />
      <WhyWe />
      <Map />
      <AboutLicense />
      <Steps />
      {/* PRAVKI # DA OCHIriLDI SMI VA SOCIAL */}
      {/* <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-4">
        <Application />
        <Social />
      </div> */}
    </div>
  );
}
