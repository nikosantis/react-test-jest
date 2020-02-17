import { saluda, despide, getId } from './string'

describe('Pruebas de strings', () => {

  const saludo = saluda('Nikolas')
  const saludoDespide = despide()
  const id = getId()

  it('Probando la función saluda', () => {
    expect(saludo).toMatch('Hola soy')
  })

  it('Probando la función despide', () => {
    expect(saludoDespide).toMatch('Bye')
  })

  it('Probando la función getId', () => {
    expect(id).toMatch(/\d{2}-\d{3}/)
  })
})