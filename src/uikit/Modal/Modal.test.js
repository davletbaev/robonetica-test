import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'

describe('Modal component', () => {
  it('renders without crashing', () => {
    shallow(<Modal />)
  });
})