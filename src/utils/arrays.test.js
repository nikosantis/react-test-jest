import { createStore } from './arrays'

describe('Haciendo pruebas a listas / Arrays', () => {

  it('Probando agregar una nueva fruta', () => {
    const store = createStore()

    store.addFruit('Fresa')

    expect(store.getFruits()).toStrictEqual([ 'Fresa' ])
  })

  it('Probando agregar dos frutas', () => {
    const store = createStore()

    store.addFruit('Fresa')
    store.addFruit('Melón')

    expect(store.getFruits()).toStrictEqual([ 'Fresa', 'Melón' ])
  })

  it('Probando si contiene fruta específica', () => {
    const store = createStore()

    store.addFruit('Manzana')
    store.addFruit('Pera')

    expect(store.getFruits()).toContain('Pera')
    expect(store.getFruits()).not.toContain('Banana')
  })

  it('Probando la longitud del Array', () => {
    const store = createStore()

    store.addFruit('Manzana')
    store.addFruit('Pera')
    store.addFruit('Banana')

    expect(store.getFruits()).toHaveLength(3)
  })

  it('Probando agregar un objetco con información de frutas', () => {
    const store = createStore()

    store.addFruit({
      name: 'Manzana',
      price: 10
    })

    expect(store.getFruits()).toContainEqual({ name: 'Manzana', price: 10 })
  })
})