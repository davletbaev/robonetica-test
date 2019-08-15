import React from 'react'
import classnames from 'classnames/bind'

import styles from './Input.module.scss'
const cn = classnames.bind(styles)

const Input = ({
  inputRef,
  type,
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
	onKeyUp
}) => {
  const wrapClasses = cn(
    'control',
    !!error && 'control--error',
    className
  )

  const inputClasses = cn(
    'control__input',
    type === 'tel' && 'control__input--phone'
  )

  return (
    <label className={ wrapClasses }>
      <input
        ref={ inputRef }
        type={ type } 
        name={ name } 
        className={ inputClasses } 
        value={ value } 
        placeholder={ label }
        readOnly={ readOnly }
        onFocus={ onFocus }
        onBlur={ onBlur }
        onChange={ onChange }
        onKeyUp={ onKeyUp }
        required={ required }
        disabled={ disabled }
      />
      { label && <span className={ cn('control__label') }>{ label }</span> }
      { error && <span className={ cn('control__error') }>{ error }</span> }
    </label>
  )
}

export default Input