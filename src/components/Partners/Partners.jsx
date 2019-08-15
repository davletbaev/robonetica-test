import React, { Fragment } from 'react'

import { Heading } from 'uikit'
import { useWindowSize } from 'helpers'

import * as Logos from './img'

import styles from './Partners.module.scss'

const Partners = () => {
  const { isMobile } = useWindowSize()

  return (
    <Fragment>
      { isMobile && <Heading align="center">Partners:</Heading> }
      <ul className={ styles['partners'] } >
        { Object.values(Logos).map((Logo, idx) => (
          <li key={ idx } className={ styles['partners__item'] }>
            <Logo />
          </li>
        ) ) }
      </ul>
    </Fragment>
  )
}

export default Partners