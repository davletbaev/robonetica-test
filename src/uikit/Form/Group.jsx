import React from 'react'
import classnames from 'classnames/bind'

import styles from './Form.module.scss'
const cn = classnames.bind(styles)

const Group = ({
	row,
	children,
	className
}) => {
  const classes = cn(
    'group',
    row && 'is-row',
    className
  )

	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

export default Group