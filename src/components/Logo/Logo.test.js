import React from 'react'
import { shallow, render } from 'enzyme'
import Logo from './Logo'

describe('Logo component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Logo />)
  })

  it('renders without crashing', () => {
    shallow(<Logo />)
  })

  it('contains link', () => {
    expect(wrapper.find('a').length).toBe(1)
  })

  it('contains link with href leading to index page', () => {
    expect(wrapper.find('a').prop('href')).toEqual('/')
  })

  it('contains link with alt attribute with value «Go to Beginning»', () => {
    expect(wrapper.find('a').prop('title')).toEqual('Go to Beginning')
  })

  it('contains svg image', () => {
    expect(wrapper.find('svg').length).toBe(1)
  })
})