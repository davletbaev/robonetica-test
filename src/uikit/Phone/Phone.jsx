import React from 'react'
import PhoneInput from 'react-phone-input-mui'
import classnames from 'classnames/bind'

import styles from './Phone.module.scss'

import { Input } from '../Input'

const cn = classnames.bind(styles)

const Phone = ({
  name,
  label,
  value = '',
  error,
  readOnly,
	disabled,
	required,
	className,
	onFocus,
	onBlur,
	onChange,
	onKeyUp,
}) => {
  return (
    <PhoneInput
      buttonClass={ cn('dropdown__button') }
      dropdownClass={ cn('dropdown') }
      value={ value } 
      placeholder={ label }
      onChange={ onChange }
      onFocus={ onFocus }
      onBlur={ onBlur }
      onKeyUp={ onKeyUp }
      component={ Input }
      inputExtraProps={ {
        readOnly,
        required,
        label,
        error,
        name
      } }
    />
  )
}

export default Phone