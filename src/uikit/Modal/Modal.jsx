import React from 'react'
import classnames from 'classnames/bind'

import styles from './Modal.module.scss'
const cn = classnames.bind(styles)

const Modal = ({
  children
}) => {
  return (
    <div className={ cn('modal') }>{ children }</div>
  )
}

export default Modal