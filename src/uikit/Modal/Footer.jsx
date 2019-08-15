import React from 'react'

import styles from './Modal.module.scss'

const Footer = ({
	children
}) => (
	<div className={ styles['modal__footer'] }>
		{ React.Children
			.toArray(children)
			.filter(child => React.isValidElement(child))
			.map(child => {
				return React.cloneElement(child, { className: styles['modal__footer-item'] })
			})
		}
	</div>
)

export default Footer