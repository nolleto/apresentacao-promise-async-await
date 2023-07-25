const myFunction = async () => 42

async function main() {
  try {
    const value = await myFunction()

    console.log(value)
  } catch (error) {
    console.error(error)
  }

  console.log('Done')
}

main()
