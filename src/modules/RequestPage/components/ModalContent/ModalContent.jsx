import React from 'react'
import { A } from 'hookrouter'

import { Modal, Paragraph } from 'uikit'
import { useWindowSize } from 'helpers'

import RequestForm from '../RequestForm'
import RequestResult from '../RequestResult'

const ModalContent = ({
  onClosed,
  setRequestStatus,
  isOpen,
  requestStatus
}) => {
  const { isMobile, isTablet } = useWindowSize()

  const closeHandler = () => {
    onClosed()
    setRequestStatus('waiting')
  }

  return (
    <Modal onClose={ closeHandler } isOpen={ isOpen } ignoreOverlayClick >
      <Modal.Header>
        <Modal.Close closeHandler={ closeHandler } />
      </Modal.Header>

      <Modal.Body>
        { requestStatus === 'waiting' && <RequestForm onSubmitted={ setRequestStatus } /> }

        { requestStatus === 'success' && (
          <RequestResult>Thank You!</RequestResult>
        ) }

        { requestStatus === 'error' && (
          <RequestResult>
            There was a error while sending your request.
            <br />
            Please try again later.
          </RequestResult>
        ) }
      </Modal.Body> 

      <Modal.Footer>
        <Paragraph align={ (isMobile || isTablet) ? 'center' : 'left' }>
          We collect your data to keep you updated about our programs. <br />
          By submitting this form you agree to the { !isTablet && <br /> }
          <A href="/">Privacy Policy</A>.
        </Paragraph>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalContent