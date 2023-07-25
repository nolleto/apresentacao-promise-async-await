const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const main = async () => {
  const numbers = [3, 2, 1]

  const reducePromise = numbers.reduce(
    (promise, number, index) => {
      return promise
        .then(() => waitAndReturn(number, number * 2))
        .then((newNumber) => { console.log({ index, number, newNumber }) })
    },
    Promise.resolve()
  )

  await reducePromise
}

main()
