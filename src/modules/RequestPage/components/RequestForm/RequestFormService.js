import axios from 'axios'

import { api } from 'helpers'

export const sendRequest = async (formData, actions) => {
  let response

  try {
    response = await axios.post(api.request, formData)

    if (response.status === 200) return 'success'

    return 'error'
  } catch(e) {
    return 'error'
  } finally {
    actions.setSubmitting()
  }
}