import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

describe('Form component', () => {
  it('renders without crashing', () => {
    shallow(<Form />)
  });
})