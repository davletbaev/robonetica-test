import React from 'react'

import * as Logos from './img'

import styles from './Partners.module.scss'

const Partners = () => {
  return (
    <ul className={ styles['partners'] } >
      { Object.values(Logos).map((Logo, idx) => (
        <li key={ idx } className={ styles['partners__item'] }>
          <Logo />
        </li>
      ) ) }
    </ul>
  )
}

export default Partners