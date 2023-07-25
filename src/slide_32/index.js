const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const main = async () => {
  const numbers = [3, 2, 1]

  const reducePromise = numbers.reduce(
    async (promise, number, index) => {
      await promise
      const newNumber = await waitAndReturn(number, number * 2)

      console.log({ index, number, newNumber })
    },
    Promise.resolve()
  )

  await reducePromise
}

main()
