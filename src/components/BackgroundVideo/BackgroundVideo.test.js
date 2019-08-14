import React from 'react'
import { shallow, render } from 'enzyme'
import BackgroundVideo from './BackgroundVideo'

describe('BackgroundVideo component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<BackgroundVideo />)
  })

  it('renders without crashing', () => {
    shallow(<BackgroundVideo />)
  })

  it('contains video', () => {
    expect(wrapper.find('video').length).toBe(1)
  })

  it('contains video with src', () => {
    expect(wrapper.find('video').attr('src')).toBeTruthy()
  })
})