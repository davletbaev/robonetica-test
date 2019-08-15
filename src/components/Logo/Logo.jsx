import React from 'react'

import styles from './Logo.module.scss'
import { ReactComponent as LogoImage } from './Logo.svg'

const Logo = () => {
  return (
    <div className={ styles['logo'] }>
      <a href="/" title="Go to Beginning" className={ styles['logo__link'] }>
        <LogoImage />
      </a>
    </div>
  )
}

export default Logo