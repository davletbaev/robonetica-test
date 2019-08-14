import React, { useState, useEffect } from 'react'
import Video from 'react-background-video-player'

import styles from './BackgroundVideo.module.scss'

const BackgroundVideo = () => {
  const src = "https://video-arn2-1.xx.fbcdn.net/v/t42.9040-2/60854020_1086104511573164_8705388312258412544_n.mp4?_nc_cat=108&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_oc=AQnEaFsEiWQemCh_e5rXGebYwkQMin1RBknlbdx5Xi2Hg5il0ArHealv3JreKNOeHAw&_nc_ht=video-arn2-1.xx&oh=0c34648804063d259acd786871f8b6c2&oe=5D544386"

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)

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
      <Video
        containerWidth={ windowWidth}
        containerHeight={ windowHeight }
        src={ src }
      />
    </div>
  )
}

export default BackgroundVideo