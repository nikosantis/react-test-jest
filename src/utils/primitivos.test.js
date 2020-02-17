
const getValue = (exp) => {
  switch (exp) {
    case 'definido':
      return {}

    case 'indefinido':
      return undefined

    case 'verdadero':
      return true

    case 'falso':
      return false

    default:
      return null
  }
}

describe('Testear valores null, undefined y booleanos', () => {

  it('Validar si existe o está definido un valor', () => {
    expect(getValue('definido')).toBeDefined()
  })

  it('Validar si existe o está indefinido un valor', () => {
    expect(getValue('indefinido')).toBeUndefined()
  })

  it('Validar si el valor es null', () => {
    expect(getValue()).toBeNull()
  })

  it('Validar si el valor es verdadero', () => {
    expect(getValue('verdadero')).toBeTruthy()
  })

  it('Validar si el valor es falso', () => {
    expect(getValue('falso')).toBeFalsy()
  })

  it('Validar si el es NaN', () => {
    expect(NaN).toBeNaN()
  })
})