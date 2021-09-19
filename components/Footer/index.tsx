import React from 'react'
import { ReactComponent as PortIcon } from './svg/port.svg'

const Footer = () => {
  return (
    <footer className="section mx-auto py-16 px-8 text-center">
      <PortIcon className="mx-auto text-white h-6" />
      <h3 className="text-1.3 leading-1.4 font-medium text-white my-2">
        Port Manager
      </h3>
      <p className="text-md text-gray-350 my-4">
        Get in touch{' '}
        <a href="/" className="underline text-gray-350">
          hello@portmanager.app
        </a>
      </p>
    </footer>
  )
}

export default Footer
