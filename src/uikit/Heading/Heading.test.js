import React from 'react'
import { shallow, render } from 'enzyme'
import Heading from './Heading'

describe('Heading component', () => {
  it('renders without crashing', () => {
    shallow(<Heading />)
  });

  it('renders with correct type', () => {
    const wrapper = render(<Heading type="h2" />)
    expect(wrapper.is('h2')).toBeTruthy()
  })

  it('renders with correct size if size prop passed', () => {
    const wrapper = render(<Heading size="h3" />)
    expect(wrapper.hasClass('size--h3')).toBeTruthy()
  })

  it('renders with correct size if size prop not passed', () => {
    const wrapper = render(<Heading type="h3" />)
    expect(wrapper.hasClass('size--h3')).toBeTruthy()
  })

  it('renders children', () => {
    const wrapper = render(<Heading>Test</Heading>)
    expect(wrapper.text()).toEqual('Test')
  })
})