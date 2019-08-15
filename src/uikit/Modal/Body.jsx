import React from 'react'

import styles from './Modal.module.scss'

const Body = ({
	children
}) => (
	<div className={ styles['modal__body'] }>
		{ children }
	</div>
)

export default Body