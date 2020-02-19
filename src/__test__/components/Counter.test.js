import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Counter } from '../../components/Counter'

describe('Probando componente <Counter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })

  it('Validar que coincida con Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Validar funcionamiento de botones', () => {

    wrapper.find('button').first().simulate('click')

    expect(wrapper.find('h1').text()).toBe('1')

    wrapper.find('button').last().simulate('click')
    wrapper.find('button').last().simulate('click')
    wrapper.find('button').last().simulate('click')

    expect(wrapper.find('h1').text()).toBe('-2')
  })
})
