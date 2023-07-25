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
    const value = await Promise.any([
      waitAndReturn(1, 'quick'),
      waitAndReturn(3, 'slow'),
      waitAndThrow(0),
    ])

    console.log({ value })
  } catch (error) {
    console.error('My log', error)
  }

  console.timeEnd('Execution time')
}

main()
