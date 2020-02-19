import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App, { Title } from '../App'

describe('Probando componente <App />', () => {
  it('Probando renderizado de componente', () => {
    const wrapper = shallow(<App />)

    // console.log(wrapper.find('h1'))
    // console.log(wrapper.find('div ~ p').length)
    // console.log(wrapper.find('[num="3"]').html())
    // console.log(wrapper.find('[type="text"]').html())
    // console.log(wrapper.find('[type="checkbox"]').html())
    // console.log(wrapper.find(Title).html())

    // expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>')
    // expect(wrapper.find('h1')).toHaveLength(1)
  })
})