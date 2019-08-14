import React from 'react'
import classnames from 'classnames/bind'

import styles from './Button.module.scss'
const cn = classnames.bind(styles)

const Button = ({
  type = 'button',
  className,
  children,
  ...otherProps
}) => {
  const classes = cn(
    'button',
    className
  )

  return (
    <button type={ type } className={ classes } { ...otherProps }>{ children }</button>
  )
}

export default Button