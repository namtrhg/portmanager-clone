import React from 'react'
import { ReactComponent as PortIcon } from './svg/port.svg'

const Footer = () => {
  return (
    <footer className="container mx-auto p-8 text-center">
      <PortIcon className="mx-auto text-white h-6" />
      <h3 className="text-xl leading-6 font-medium text-white my-2">
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
