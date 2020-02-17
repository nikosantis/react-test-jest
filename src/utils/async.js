export const getDataCallback = (callback) => {
  // Solicitud http a una API
  const name = 'Nikolas Santis'

  setTimeout(() => {
    callback(name)
  }, 300)
}

export const getDataPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Nikolas Santis')
  }, 300)
})

export const getDataPromiseError = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error')
  }, 300)
})

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5')
  const user = await res.json()

  return user
}