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
    const value = await Promise.any([
      waitAndThrow(0, 'Error 1'),
      waitAndThrow(2, 'Error 2'),
      waitAndThrow(1, 'Error 3'),
    ])

    console.log({ value })
  } catch (error) {
    console.error('My log', error)
  }

  console.timeEnd('Execution time')
}

main()
