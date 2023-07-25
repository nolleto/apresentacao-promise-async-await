const myFunction = () => Promise.resolve(42)

function main() {
  myFunction()
    .then((value) => {
      console.log(value)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log('Done')
    })
}

main()
