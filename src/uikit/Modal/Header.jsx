import React from 'react'

import styles from './Modal.module.scss'

const Header = ({
	children
}) => (
	<div className={ styles['modal__header'] }>
		{ children }
	</div>
)

export default Header