import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from './Paragraph'

describe('Paragraph component', () => {
  it('renders without crashing', () => {
    shallow(<Paragraph />)
  });
})