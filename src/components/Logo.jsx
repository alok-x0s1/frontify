import React from 'react'
import logo from "../../public/logo.png"

const Logo = ({width = '100px'}) => {
  return (
    <div>
      <img src={logo} alt="logo" style={{width}} />
    </div>
  )
}

export default Logo