import React from 'react'
import classnames from 'classnames/bind'

import styles from './Phone.module.scss'
const cn = classnames.bind(styles)

const Phone = () => {
  return (
    <input className={ cn('phone') } />
  )
}

export default Phone