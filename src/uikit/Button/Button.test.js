import React from 'react'
import { shallow, render } from 'enzyme'
import Button from './Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button />)
  });

  it('renders with correct type', () => {
    const wrapper = render(<Button />)
    expect(wrapper.attr('type')).toEqual('button')
  })

  it('renders with correct type', () => {
    const wrapper = render(<Button type="submit" />)
    expect(wrapper.attr('type')).toEqual('submit')
  })

  it('renders with correct type', () => {
    const wrapper = render(<Button type="reset" />)
    expect(wrapper.attr('type')).toEqual('reset')
  })

  it('renders children', () => {
    const wrapper = render(<Button>Test</Button>)
    expect(wrapper.text()).toEqual('Test')
  })
})