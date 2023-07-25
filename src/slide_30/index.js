const waitAndReturn = (seconds, returnValue) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(returnValue) }, seconds * 1000)
  })
}

const main = async () => {
  const numbers = [3, 2, 1]

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const newNumber = await waitAndReturn(number, number * 2)

    console.log({ index, number, newNumber })
  }
}

main()
