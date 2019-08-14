import React from 'react'

import styles from './Layout.module.scss'

const App = ({
  children
}) => {
  return (
    <div className={ styles['layout__app'] }>
      { children}
    </div>
  )
}

export default App