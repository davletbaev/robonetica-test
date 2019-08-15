import React from 'react'
import { getIn } from 'formik'

import PhoneInput from './Phone'

const PhoneField = ({
	field: { name, value, onBlur, onFocus, onChange },
	form: { errors, touched },
	...props
}) => {
	const error = getIn(errors, name)
	const touch = getIn(touched, name)

	const errorMessage = touch && error

	return (
		<PhoneInput
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

export default PhoneField