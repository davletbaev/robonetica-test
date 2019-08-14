import React from 'react'
import { shallow, render } from 'enzyme'
import Paragraph from './Paragraph'

describe('Paragraph component', () => {
  it('renders without crashing', () => {
    shallow(<Paragraph />)
  });

  it('renders children', () => {
    const wrapper = render(<Paragraph><span>Test</span></Paragraph>)
    expect(wrapper.find('span').length).toBeTruthy()
  })
})