import React from 'react'
import { ReactComponent as PortIcon } from './svg/port.svg'

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <section className="section p-8 md:max-w-[1064px] md:py-16">
        <div className="h-6 flex items-center">
          <PortIcon className="text-white mx-auto" />
        </div>
        <h3 className="leading-1.4 font-medium my-2 text-center text-[20.8px]">
          Port Manager
        </h3>
        <p className="text-[1rem] my-4 text-gray-350 h-[21px]">
          Get in touch{' '}
          <a className="underline" href="mailto:hello@portmanager.app">
            hello@portmanager.app
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
