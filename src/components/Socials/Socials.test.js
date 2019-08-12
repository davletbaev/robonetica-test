import React from 'react'
import { shallow, render } from 'enzyme'
import Socials from './Socials'

describe('Socials component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Socials />)
  })

  it('renders without crashing', () => {
    shallow(<Socials />)
  });
})