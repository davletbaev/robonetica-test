import React from 'react'
import classnames from 'classnames/bind'

import styles from './Select.module.scss'
const cn = classnames.bind(styles)

const Select = () => {
  return (
    <select className={ cn('select') } >
    </select>
  )
}

export default Select