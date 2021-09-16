import React from 'react'

const Button: React.FC<any> = ({ children }) => {
  return <button className="p-4 bg-black text-white rounded">{children}</button>
}

export default Button
