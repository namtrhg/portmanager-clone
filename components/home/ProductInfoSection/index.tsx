import { ImgWithFallback } from 'components/ImageWithFallback'

export const ProductInfoSection = () => {
  return (
    <section className="container mx-auto">
      <ImgWithFallback
        className="relative mx-auto"
        src="/img/menu.webp"
        fallback="/img/menu.png"
        width={440}
      />
    </section>
  )
}
