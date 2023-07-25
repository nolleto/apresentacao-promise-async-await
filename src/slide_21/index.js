const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const main = async () => {
  console.time('Execution time')

  const [
    value1,
    value2,
    value3
  ] = await Promise.all([
    waitAndReturn(3, 'banana'),
    waitAndReturn(1, 'abacaxi'),
    waitAndReturn(2, 'morango'),
  ])

  console.log({ value1, value2, value3 })

  console.timeEnd('Execution time')
}

main()
