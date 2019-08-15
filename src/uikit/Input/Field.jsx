import React from 'react'
import { getIn } from 'formik'

import Input from './Input'

const InputField = ({
	field: { name, value, onBlur, onFocus, onChange },
	form: { errors, touched },
	...props
}) => {
	const error = getIn(errors, name)
	const touch = getIn(touched, name)

	const errorMessage = touch && error

	return (
		<Input
			name={ name }
			value={ value }
			onBlur={ onBlur }
			onFocus={ onFocus }
			onChange={ onChange }
			error={ errorMessage }
			{ ...props }
		/>
	)
}

export default InputField