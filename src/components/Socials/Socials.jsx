import React from 'react'

import styles from './Socials.module.scss'

import { ReactComponent as FacebookLogo } from './facebook.svg'
import { ReactComponent as InstagramLogo } from './instagram.svg'
import { ReactComponent as LinkedinLogo } from './linkedin.svg'

const Socials = () => {
  return (
    <ul className={ styles['socials'] }>
      <li className={ styles['socials__item'] }>
        <a
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          title="Facebook"
          aria-label="Facebook"
          className={ styles['socials__link'] }
        >
          <FacebookLogo />
        </a>
      </li>

      <li className={ styles['socials__item'] }>
        <a
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram"
          aria-label="Instagram"
          className={ styles['socials__link'] }
        >
          <InstagramLogo />
        </a>
      </li>

      <li className={ styles['socials__item'] }>
        <a
          href="https://linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
          aria-label="LinkedIn"
          className={ styles['socials__link'] }
        >
          <LinkedinLogo />
        </a>
      </li>
    </ul>
  )   
}

export default Socials