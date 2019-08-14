import React from 'react'
import classnames from 'classnames/bind'

import styles from './Heading.module.scss'
const cn = classnames.bind(styles)

const Heading = ({
  type = 'h1',
  size,
  className,
  children,
  ...otherProps
}) => {
  const classes = cn(
    'heading',
    size ? `size--${ size }` : `size--${ type }`,
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

export default Heading