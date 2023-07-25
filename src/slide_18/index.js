const myFunction = async () => 42

async function main() {
  try {
    const value = await myFunction()
    console.log('then 1', value)
    throw new Error('error')
    console.log('then 2', undefined)
  } catch (error) {
    console.error('catch 1')
  }

  console.log('finally 1')

  try {
    console.log('then 3', undefined)
    console.log('then 4', undefined)
  } catch {
    console.error('catch 2')
  }

  console.log('finally 2')
}

main()
