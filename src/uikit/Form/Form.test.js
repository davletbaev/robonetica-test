import React from 'react'
import { shallow, render } from 'enzyme'
import Form from './Form'
import Group from './Group'
import Field from './Field'

describe('Form component', () => {
  it('renders without crashing', () => {
    shallow(<Form />)
  });

  it('renders children', () => {
    const wrapper = render(<Form>Test</Form>)
    expect(wrapper.text()).toEqual('Test')
  });
})

describe('Form Group component', () => {
  it('renders without crashing', () => {
    shallow(<Group />)
  });

  it('renders with class "is-row" if "row" property passed', () => {
    const wrapper = render(<Group row />)
    expect(wrapper.hasClass('is-row')).toBeTruthy()
  })

  it('renders children', () => {
    const wrapper = render(<Group>Test</Group>)
    expect(wrapper.text()).toEqual('Test')
  });
})

describe('Form Field component', () => {
  it('renders without crashing', () => {
    shallow(<Field />)
  });

  it('renders children', () => {
    const wrapper = render(<Field>Test</Field>)
    expect(wrapper.text()).toEqual('Test')
  });
})