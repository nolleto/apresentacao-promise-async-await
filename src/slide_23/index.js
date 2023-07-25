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
      value1,
      value2,
      value3
    ] = await Promise.all([
      waitAndReturn(3, 'banana'),
      waitAndReturn(1, 'abacaxi'),
      waitAndReturn(2, 'morango'),
      waitAndThrow(2),
    ])

    console.log({ value1, value2, value3 })
  } catch (error) {
    console.error('My log', error)
  }

  console.timeEnd('Execution time')
}

main()
