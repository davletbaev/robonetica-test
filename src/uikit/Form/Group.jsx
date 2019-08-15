import React from 'react'
import classnames from 'classnames/bind'

import styles from './Form.module.scss'
const cn = classnames.bind(styles)

const Group = ({
	row,
	align = 'left',
	children,
	className
}) => {
  const classes = cn(
    'group',
		row && 'is-row',
		align && `align--${ align }`,
    className
  )

	return (
		<div className={ classes }>
			{ children }
		</div>
	)
}

export default Group