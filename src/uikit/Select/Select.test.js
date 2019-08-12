import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

describe('Select component', () => {
  it('renders without crashing', () => {
    shallow(<Select />)
  });
})