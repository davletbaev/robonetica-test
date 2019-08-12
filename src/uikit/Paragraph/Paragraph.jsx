import React from 'react'
import classnames from 'classnames/bind'

import styles from './Paragraph.module.scss'
const cn = classnames.bind(styles)

const Paragraph = ({
  children
}) => {
  return (
    <p className={ cn('paragraph') }>{ children }</p>
  )
}

export default Paragraph