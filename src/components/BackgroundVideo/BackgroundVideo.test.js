import React from 'react'
import { shallow } from 'enzyme'
import BackgroundVideo from './BackgroundVideo'

describe('BackgroundVideo component', () => {
  it('renders without crashing', () => {
    shallow(<BackgroundVideo />)
  });
})