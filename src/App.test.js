import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });
})

describe('App integration', () => {
  let component

  beforeEach(() => {
    component = mount(<App />)
  })

  afterEach(() => {
    component.unmount()
  })

  it('contains Header component', () => {
    expect(component.exists('Header')).toBeTruthy()
  })

  it('contains Request Page component', () => {
    expect(component.exists('Logo')).toBeTruthy()
  })

  it('contains Nav component', () => {
    expect(component.exists('Nav')).toBeTruthy()
  })
})
