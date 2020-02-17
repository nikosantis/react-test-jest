import {
  getDataCallback,
  getDataPromise,
  getDataPromiseError,
  getUsers
} from './async'

describe('Haciendo test a operaciones asíncronas', () => {

  it('Haciendo test a callback', (done) => {

    getDataCallback((name) => {
      expect(name).toBe('Nikolas Santis')
      done()
    })
  })

  it('Haciendo test a promesa', (done) => {

    getDataPromise()
      .then((name) => {
        expect(name).toBe('Nikolas Santis')
        done()
      })
  })

  it('Haciendo test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Nikolas Santis')
  })

  it('Haciendo test a promesa rechazada', (done) => {

    getDataPromiseError()
      .catch((error) => {
        expect(error).toBe('Error')
        done()
      })
  })

  it('Haciendo test a promesa rechazada con expect', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

  it('Haciendo test a promesa resuelta con async await', async () => {

    const name = await getDataPromise()
    expect(name).toBe('Nikolas Santis')
  })

  it('Haciendo test a promesa rechazada con async await', async () => {

    try {
      const name = await getDataPromiseError()
      expect(name).toBe('Nikolas Santis')
    } catch (error) {
      expect(error).toBe('Error')
    }
  })

  it('Probando promesa con solicitud HTTP', async () => {
    const user = await getUsers()
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
  })
})