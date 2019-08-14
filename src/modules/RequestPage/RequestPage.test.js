import React from 'react'
import { shallow, mount } from 'enzyme'
import RequestPage from './RequestPage'

describe('RequestPage component', () => {
  it('renders without crashing', () => {
    shallow(<RequestPage />)
  });
})

describe('RequestPage integration', () => {
  let component

  beforeAll(() => {
    component = mount(<RequestPage />)
  })

  afterAll(() => {
    component.unmount()
  })

  it('contains Socials component', () => {
    expect(component.exists('Socials')).toBeTruthy()
  })

  it('contains Heading component, and only 1', () => {
    expect(component.find('Heading').length).toBe(1)
  })

  it('contains Button component, and only 1', () => {
    expect(component.find('Button').length).toBe(1)
  })

  it('contains 3 Paragraph components', () => {
    expect(component.find('Paragraph').length).toBe(3)
  })

  it('contains Partners component', () => {
    expect(component.exists('Partners')).toBeTruthy()
  })

  it('contains BackgroundVideo component', () => {
    expect(component.exists('BackgroundVideo')).toBeTruthy()
  })
})