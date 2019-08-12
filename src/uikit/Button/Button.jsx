import React from 'react'
import classnames from 'classnames/bind'

import styles from './Button.module.scss'
const cn = classnames.bind(styles)

const Button = ({
  children
}) => {
  return <button className={ cn('button') }>{ children }</button>
}

export default Button