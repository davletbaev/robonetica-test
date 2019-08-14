import React from 'react'
import classnames from 'classnames/bind'

import styles from './Paragraph.module.scss'
const cn = classnames.bind(styles)

const Paragraph = ({
  className,
  children,
  ...otherProps
}) => {
  const classes = cn(
    'paragraph',
    className
  )

  return (
    <p className={ classes } { ...otherProps }>{ children }</p>
  )
}

export default Paragraph