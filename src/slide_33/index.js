const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const runSequentially = (list, toPromise) =>
  list.reduce(
    async (promise, item, index) => {
      const values = await promise
      const newValue = await toPromise(item, index)

      return [...values, newValue]
    },
    Promise.resolve([])
  )


const main = async () => {
  const numbers = [3, 2, 1]

  await runSequentially(numbers, async (number, index) => {
    const newNumber = await waitAndReturn(number, number * 2)

    console.log({ index, number, newNumber })
  })
}

main()
