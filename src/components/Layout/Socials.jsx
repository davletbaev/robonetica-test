import React from 'react'

import styles from './Layout.module.scss'

const Socials = ({
  children
}) => {
  return (
    <div className={ styles['layout__socials'] }>
      { children}
    </div>
  )
}

export default Socials