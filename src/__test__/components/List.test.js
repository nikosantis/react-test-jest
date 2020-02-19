import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { List } from '../../components/List'

describe('Probando componente <List />', () => {
  const fruits = [
    { name: 'Fresa', id: 1 },
    { name: 'Manzana', id: 2 },
    { name: 'Sandía', id: 3 },
    { name: 'Banana', id: 4 }
  ]
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<List title='Frutas' list={fruits} />)
  })

  it('Validar nodos', () => {

    // validar si existe nodo
    expect(wrapper.find('h1').exists()).toBe(true)

    // validar si tiene clase css
    expect(wrapper.find('h1').hasClass('big')).toBe(true)

    // validar cantidad de elementos hijos
    expect(wrapper.find('ul').children().length).toBe(4)

    // validar el contenido de texto
    expect(wrapper.find('ul').childAt(2).text()).toBe('Sandía')
    // console.log(wrapper.find('li').first().html())
    // console.log(wrapper.find('li').last().html())
    // console.log(wrapper.find('ul').childAt(2).html())

    // validar el tipo de nodo / elemento
    expect(wrapper.find('ul').childAt(2).type()).toBe('li')

    // validar el html
    // validar el contenido de texto
    expect(wrapper.find('ul').childAt(2).html()).toBe('<li>Sandía</li>')
  })

  it('Validar actualizaciones en props', () => {
    // validar cantidad de elementos li
    expect(wrapper.find('li').length).toBe(4)

    wrapper.setProps({
      list: [
        { name: 'kiwi', id: 5 }
      ]
    })

    // validar cantidad de elementos li
    expect(wrapper.find('li').length).toBe(1)

    wrapper.setProps({
      title: 'Super frutas'
    })

    // validar cantidad de elementos li
    expect(wrapper.find('.big').text()).toBe('Super frutas')
  })

  it('Validar que coincida con Spapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})