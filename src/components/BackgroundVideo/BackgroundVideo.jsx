import React, { useState, useEffect } from 'react'
import Video from 'react-background-video-player'

import { useWindowSize } from 'helpers'

import styles from './BackgroundVideo.module.scss'

import videoSrc from './explorer.mp4'

const BackgroundVideo = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    function resizeHandler() {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', resizeHandler)
    window.addEventListener('orientationchange', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener('orientationchange', resizeHandler)
    }
  }, [])

  return (
    <div className={ styles['wrap'] }>
      { (!isMobile && !isTablet) && (
        <Video
          containerWidth={ windowWidth }
          containerHeight={ windowHeight }
          src={ videoSrc }
        /> 
      ) }
    </div>
  )
}

export default BackgroundVideo