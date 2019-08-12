import React from 'react'
import classnames from 'classnames/bind'

import styles from './Input.module.scss'
const cn = classnames.bind(styles)

const Input = () => {
  return (
    <input className={ cn('input') } />
  )
}

export default Input