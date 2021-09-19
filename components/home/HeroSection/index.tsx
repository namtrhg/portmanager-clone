import { ImgWithFallback } from 'components/ImageWithFallback'
import { ReactComponent as PortIcon } from './svg/port.svg'

export const HeroSection = () => {
  return (
    <section className="section pt-12 px-8 pb-8 md:p-0 md:pt-[144px] md:pb-[48px] md:max-w-[1064px] md:px-8">
      <div className="relative md:w-1/2 md:mt-0 md:bg-none block antialiased">
        <div className="flex items-center text-18 h-[21px]">
          <div className="mr-2 self-end">
            <PortIcon className="text-primary" />
          </div>
          <h1 className="text-primary text-[1rem] font-bold m-0 block">
            Port Manager
          </h1>
        </div>
        <h2 className="text-black font-bold text-2.4 leading-1.2 md:text-[3rem] mt-4 mb-8 sm:mt-8 sm:mb-8">
          Manage ports from your menu bar.
        </h2>
        <p className="text-1.2 leading-1.6 block text-primary my-[19.2px]">
          Find, open and kill ports in a couple of clicks — so you can go back
          to writing code.
        </p>
        <div className="block md:h-[105px]">
          <a
            className="p-4 my-4 h-14 text-white text-18 no-underline inline-block rounded font-semibold bg-black hover:bg-[#222] active:bg-[#111]"
            href="https://gum.co/xTJlY?wanted=true"
            target="_blank"
            rel="noreferrer"
          >
            Get Port Manager for macOS
          </a>
          <div className="text-0.8 text-primary h-[17px] block">
            Works with macOS Sierra (10.12 ) and above.
          </div>
        </div>
      </div>
      <ImgWithFallback
        className="mt-16 h-auto sm:illustration"
        src="/img/hero_illustration.webp"
        fallback="/img/hero_illustration.png"
        width="624"
        height="324"
      />
    </section>
  )
}
