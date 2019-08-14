import React from 'react'

import styles from './Layout.module.scss'

const Description = ({
  children
}) => {
  return (
    <div className={ styles['layout__description'] }>
      { React.Children
				.toArray(children)
				.filter(child => React.isValidElement(child))
				.map(child => React.cloneElement(child, { className: styles['layout__description-item'] })) }
    </div>
  )
}

export default Description