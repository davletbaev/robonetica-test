import React from 'react'

import styles from './Layout.module.scss'

const Partners = ({
  children
}) => {
  return (
    <div className={ styles['layout__partners'] }>
      { children}
    </div>
  )
}

export default Partners