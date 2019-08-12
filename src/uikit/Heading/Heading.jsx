import React from 'react'
import classnames from 'classnames/bind'

import styles from './Heading.module.scss'
const cn = classnames.bind(styles)

const Heading = ({
  children
}) => {
  return (
    <h1 className={ cn('heading') }>{ children }</h1>
  )
}

export default Heading