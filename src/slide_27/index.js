const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const waitAndThrow = async (seconds, message = 'Something went wrong!') => {
  await waitAndReturn(seconds)
  throw new Error(message)
}

const main = async () => {
  console.time('Execution time')

  try {
    const value = await Promise.race([
      waitAndReturn(1, 'Quick'),
      waitAndReturn(5, 'Slow'),
      waitAndThrow(2),
    ])

    console.log({ value })
  } catch (error) {
    console.error('My log', error)
  }

  console.timeEnd('Execution time')
}

main()
