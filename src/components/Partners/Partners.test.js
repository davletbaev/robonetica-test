import React from 'react'
import { shallow, render } from 'enzyme'
import Partners from './Partners'

describe('Partners component', () => {
  it('renders without crashing', () => {
    shallow(<Partners />)
  });

  it('should contains multiple Logo svg elements', () => {
    const wrapper = render(<Partners />)
    expect(wrapper.find('svg').length).toBeGreaterThan(1)
  })
})