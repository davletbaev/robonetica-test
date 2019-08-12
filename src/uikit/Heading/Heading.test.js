import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

describe('Heading component', () => {
  it('renders without crashing', () => {
    shallow(<Heading />)
  });
})