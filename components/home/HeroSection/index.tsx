import Button from 'components/Button'
import { ImgWithFallback } from 'components/ImageWithFallback'
import { ReactComponent as PortIcon } from './svg/port.svg'

export const HeroSection = () => {
  return (
    <section className="container mx-auto pt-36 px-8 pb-12">
      <div className="flex flex-wrap space-x-8">
        <div className="max-w-lg">
          <div className="flex space-x-2">
            <PortIcon className="text-primary self-end" />
            <h1 className="text-primary font-bold">Port Manager</h1>
          </div>
          <h2 className="text-5xl leading-tight font-bold my-8 text-black">
            Manage ports from your menu bar.
          </h2>
          <p className="text-base text-primary my-5">
            Find, open and kill ports in a couple of clicks — so you can go back
            to writing code.
          </p>
          <div className="grid grid-rows">
            <a href="/" className="my-4">
              <Button>
                <span className="text-lg font-semibold">
                  Get Port Manager for macOS
                </span>
              </Button>
            </a>
            <small className="text-primary">
              Works with macOS Sierra (10.12 ) and above.
            </small>
          </div>
        </div>
        <ImgWithFallback
          className="absolute"
          src="/img/hero_illustration.webp"
          fallback="/img/hero_illustration.png"
          width={624}
          height={325}
        />
      </div>
    </section>
  )
}
