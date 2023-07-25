const myFunction = () => Promise.resolve(42)

function main() {
  myFunction()
    .then((value) => {
      console.log('then 1', value)
      throw new Error('error')
    })
    .then((value) => { console.log('then 2', value) })
    .catch(() => { console.error('catch 1') })
    .finally(() => { console.log('finally 1') })
    .then((value) => { console.log('then 3', value) })
    .then((value) => { console.log('then 4', value) })
    .catch(() => { console.error('catch 2') })
    .finally(() => { console.log('finally 2') })
}

main()
