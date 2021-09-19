import { ImgWithFallback } from 'components/ImageWithFallback'

export const ProductInfoSection = () => {
  return (
    <section className="section mx-auto">
      <ImgWithFallback
        className="relative mx-auto"
        src="/img/menu.webp"
        fallback="/img/menu.png"
        width={440}
        height={211}
      />
    </section>
  )
}
