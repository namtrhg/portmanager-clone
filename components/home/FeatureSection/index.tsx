import { ReactComponent as IconBars } from './svg/bars.svg'
import { ReactComponent as IconGlobe } from './svg/globe.svg'
import { ReactComponent as IconCursor } from './svg/cursor.svg'
import { ReactComponent as IconCopy } from './svg/copy.svg'

const features = [
  {
    icons: <IconBars className="text-white" />,
    title: 'View all of your ports in one place.',
  },
  {
    icons: <IconGlobe className="text-white" />,
    title: 'Open ports in your browser.',
  },
  {
    icons: <IconCopy className="text-white" />,
    title: 'Copy and share network URLs.',
  },
  {
    icons: <IconCursor className="text-white" />,
    title: 'Free up ports in a couple of clicks.',
  },
]

export const FeatureSection = () => {
  return (
    <section className="container mx-auto p-8 ">
      <div className="flex flex-wrap">
        {features.map((item, index) => (
          <div
            className="flex justify-start items-center w-1/2 pr-12 pb-8"
            key={index}
          >
            <div className="pr-6">
              <div className="bg-secondary rounded-full">
                <div className="p-2">{item.icons}</div>
              </div>
            </div>
            <h3 className="text-xl leading-6 text-primary my-2 font-medium">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
