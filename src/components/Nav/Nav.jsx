import React from 'react'
import classnames from 'classnames/bind'
import { A, usePath } from 'hookrouter'

import styles from './Nav.module.scss'

const cn = classnames.bind(styles)

const Nav = () => {
  const path = usePath();

  return (
    <nav className={ styles['nav'] }>
      <ul className={ styles['nav__list'] }>
        <li className={ styles['nav__item'] }>
          <A href="/" className={ cn('nav__link', path === '/' && 'nav__link--active') }>1</A>
        </li>
      </ul>
    </nav>
  )
}

export default Nav