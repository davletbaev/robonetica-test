import React from 'react'
import classnames from 'classnames/bind'

import styles from './Layout.module.scss'
const cn = classnames.bind(styles)

const Page = ({
  type = 'main',
  children,
  className,
  ...otherProps
}) => {
  const classes = cn(
    'layout__page',
    className
  )

  return React.createElement(type,
    {
      className: classes,
      ...otherProps
    },
    children
  )
}

export default Page