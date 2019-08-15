import { useState } from 'react'

const StateWrapper = ({
	initialIsOpen = false,
	children
}) => {
	const [isOpen, setOpen] = useState(initialIsOpen)

	return children({
		isOpen: isOpen,
		setModalToggle: () => setOpen(!isOpen),
		setModalOpen: () => setOpen(true),
		setModalClose: () => setOpen(false)
	})
}

export default StateWrapper