import React from 'react'
import classnames from 'classnames/bind'

import styles from './Form.module.scss'
const cn = classnames.bind(styles)

const Field = ({
	children,
	className
}) => {
  const classes = cn(
    'field',
    className
  )

	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

export default Field