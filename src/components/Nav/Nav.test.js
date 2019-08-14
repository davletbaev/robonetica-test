import React from 'react'
import { shallow, render } from 'enzyme'
import Nav from './Nav'

describe('Nav component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Nav />)
  })

  it('renders without crashing', () => {
    shallow(<Nav />)
  });

  it('wrapped by nav tag', () => {
    expect(wrapper.is('nav')).toBeTruthy()
  })

  it('contains multiple A element', () => {
    expect(wrapper.find('a').length).toBeGreaterThan(0)
  })
})