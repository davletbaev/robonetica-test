import React from 'react'
import { shallow, render } from 'enzyme'
import RequestResult from './RequestResult'

describe('RequestResult component', () => {

  it('renders without crashing', () => {
    shallow(<RequestResult />)
  })

  it('renders children', () => {
    const wrapper = render(<RequestResult>Test</RequestResult>)
    expect(wrapper.text()).toEqual('Test')
  })
})