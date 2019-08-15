import React from 'react'

import styles from './Form.module.scss'

const Form = ({
  children,
  ...otherProps
}) => {
  return (
    <form className={ styles['form'] } { ...otherProps }>{ children }</form>
  )
}

export default Form