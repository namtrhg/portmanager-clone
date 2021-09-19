import { ReactComponent as IconBars } from './svg/bars.svg'
import { ReactComponent as IconGlobe } from './svg/globe.svg'
import { ReactComponent as IconCursor } from './svg/cursor.svg'
import { ReactComponent as IconCopy } from './svg/copy.svg'

const features = [
  {
    icon: <IconBars className="text-white" />,
    title: 'View all of your ports in one place.',
  },
  {
    icon: <IconGlobe className="text-white" />,
    title: 'Open ports in your browser.',
  },
  {
    icon: <IconCopy className="text-white" />,
    title: 'Copy and share network URLs.',
  },
  {
    icon: <IconCursor className="text-white" />,
    title: 'Free up ports in a couple of clicks.',
  },
]

export const FeatureSection = () => {
  return (
    <section className="section flex flex-wrap p-8 md:max-w-[1064px]">
      {features.map((feature) => (
        <div className="pb-8 flex items-center md:w-6/12 md:pr-12 md:box-border">
          <div className="h-10 w-10 bg-secondary mr-6 flex-shrink-0 flex items-center justify-center rounded-full">
            {feature.icon}
          </div>
          <h3 className="text-1.3 text-primary leading-1.4 font-medium my-2">
            {feature.title}
          </h3>
        </div>
      ))}
    </section>
  )
}
