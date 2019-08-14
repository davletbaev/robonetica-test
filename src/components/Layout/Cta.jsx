import React from 'react'

import styles from './Layout.module.scss'

const Cta = ({
  children
}) => {
  return (
    <div className={ styles['layout__cta'] }>
      { children}
    </div>
  )
}

export default Cta