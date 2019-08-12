import React from 'react'
import { shallow } from 'enzyme'
import Partners from './Partners'

describe('Partners component', () => {
  it('renders without crashing', () => {
    shallow(<Partners />)
  });
})