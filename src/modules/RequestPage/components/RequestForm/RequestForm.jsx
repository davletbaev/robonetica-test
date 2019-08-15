import React from 'react'
import { Formik, Field } from 'formik'

import { Form, Button, InputField } from 'uikit'

import { sendRequest } from './RequestFormService'
import { validSchema } from './validSchema'

const RequestForm = ({
  onSubmitted
}) => {
  const initialValues = {
    name: '',
    age: '',
    email: '',
    phone: '',
    propose: ''
  }

  const submitHandler = async (values, actions) => {
    const status = await sendRequest(values, actions)
    onSubmitted(status)
  }

  return (
		<Formik
			initialValues={ initialValues }
			validationSchema={ validSchema }
			onSubmit={ submitHandler }
			render={ ({ errors, touched, isValid, isSubmitting, handleSubmit }) => {
				return (
					<Form onSubmit={ handleSubmit }>
						<Form.Group>
							<Form.Field>
								<Field
									name="name"
									label="Name"
									component={ InputField }
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group row>
							<Form.Field>
								<Field
									name="age"
									type="number"
									label="Age"
									component={ InputField }
								/>
							</Form.Field>

							<Form.Field>
								<Field
									name="phone"
									label="Phone"
									component={ InputField }
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group>
							<Form.Field>
								<Field
									name="email"
									type="email"
									label="Email"
									component={ InputField }
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group>
							<Form.Field>
								<Field
									name="propose"
									label="What is your propose"
									component={ InputField }
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group align="center">
							<Button type="submit" disabled={ isSubmitting } style={ { visibility: isValid ? 'visible' : 'hidden' } }>Submit</Button>
						</Form.Group>
					</Form>
				)
			} }
		/>
  )
}

export default RequestForm