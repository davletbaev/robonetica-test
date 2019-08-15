import React from 'react'

import styles from './Modal.module.scss'

const Close = ({
	closeHandler
}) => (
	<button type="button" className={ styles['modal__close'] } onClick={ closeHandler }>
		Close
	</button>
)

export default Close