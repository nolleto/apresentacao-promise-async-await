const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const waitAndThrow = async (seconds) => {
  await waitAndReturn(seconds)
  throw new Error('Something went wrong!')
}

const main = async () => {
  console.time('Execution time')

  try {
    const [
      promiseResponse1,
      promiseResponse2,
      promiseResponse3,
      promiseResponse4,
    ] = await Promise.allSettled([
      waitAndReturn(3, 'banana'),
      waitAndReturn(1, 'abacaxi'),
      waitAndReturn(2, 'morango'),
      waitAndThrow(2),
    ])

    console.log({ promiseResponse1, promiseResponse2, promiseResponse3, promiseResponse4 })
  } catch (error) {
    console.error('My log', error)
  }

  console.timeEnd('Execution time')
}

main()
