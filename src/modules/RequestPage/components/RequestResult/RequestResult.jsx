import React from 'react'

import { Heading } from 'uikit'

import styles from './RequestResult.module.scss'

const RequestResult = ({
  children
}) => {
  return (
    <Heading size="h1" type="p" className={ styles['result'] }>
      { children }
    </Heading>
  ) 
}

export default RequestResult