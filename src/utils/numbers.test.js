import {
  suma,
  resta,
  division,
  multiplicacion,
  getRandomNum
} from './numbers'

describe('Probando funciones matemáticas', () => {

  it('Probando la funcion suma', () => {
    expect(suma(5, 5)).toBe(10)
  })

  it('Probando la funcion resta', () => {
    expect(resta(5, 5)).toBe(0)
  })

  it('Probando la funcion división', () => {
    expect(division(5, 5)).toBe(1)
  })

  it('Probando la funcion multiplicación', () => {
    expect(multiplicacion(5, 5)).toBe(25)
  })

  it('Probando la funcion getRandomNum', () => {
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5)
    expect(getRandomNum(5, 10)).toBeLessThan(11)
    expect(getRandomNum(5, 10)).toBeLessThanOrEqual(11)
  })
})
