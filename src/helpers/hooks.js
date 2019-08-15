import { useState, useEffect } from 'react'

export const useWindowSize = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return {
		isMobile: screenWidth < 768,
		isTablet: screenWidth >= 768 && screenWidth < 1024,
		isLaptop: screenWidth >= 1024 && screenWidth < 1360,
		isDesktop: screenWidth >= 1360
	}
}
