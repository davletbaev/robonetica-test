import React from 'react'
import ReactModal from 'react-modal'

import styles from './Modal.module.scss'

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root')

const Modal = ({
	isOpen,
	onClose,
	afterOpen,
	ignoreOverlayClick = false,
	children
}) => {
	return (
		<ReactModal
			isOpen={ isOpen }
			onRequestClose={ onClose }
			onAfterOpen={ afterOpen }
			className={ styles['modal'] }
			overlayClassName={ styles['overlay'] }
			ariaHideApp={ true }
			shouldCloseOnOverlayClick={ !ignoreOverlayClick }
			shouldCloseOnEsc={ true }
			portalClassName={ styles['portal'] }
			bodyOpenClassName={ styles['is-open'] }
			closeTimeoutMS={ 100 }
		>
			{ children }
		</ReactModal>
	)
}

export default Modal