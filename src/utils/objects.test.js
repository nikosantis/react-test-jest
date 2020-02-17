import { createStore } from './objects'

describe('Test a Objetos', () => {

  it('Agregar un item en store', () => {

    const store = createStore()

    store.addItem({
      name: 'Nikolas',
      id: 1,
      country: 'Chile'
    })

    expect(store.getStore()[0]).toEqual({
      name: 'Nikolas',
      id: 1,
      country: 'Chile'
    })
  })

  it('Buscar un item por el id', () => {

    const store = createStore()

    store.addItem({
      name: 'Nikolas',
      id: 1,
      country: 'Chile'
    })

    expect(store.getById(1)).toEqual({
      name: 'Nikolas',
      id: 1,
      country: 'Chile'
    })

    expect(store.getById(1)).toMatchObject({
      name: 'Nikolas'
    })

    expect(store.getById(1)).toHaveProperty('name', 'Nikolas')
  })
})
