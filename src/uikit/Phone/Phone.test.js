import React from 'react'
import { shallow } from 'enzyme'
import Phone from './Phone'

describe('Phone component', () => {
  it('renders without crashing', () => {
    shallow(<Phone />)
  });
})