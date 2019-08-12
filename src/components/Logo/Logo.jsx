import React from 'react'

import { ReactComponent as LogoImage } from './Logo.svg'

const Logo = () => {
  return (
    <div>
      <a href="/" title="Go to Beginning">
        <LogoImage />
      </a>
    </div>
  )
}

export default Logo