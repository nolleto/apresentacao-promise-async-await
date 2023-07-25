const getTheAnswerOfEverything = async () => 42;

async function myFunction () {
  console.log('Start myFunction')
  const answer = await getTheAnswerOfEverything()
  console.log(`The answer of everything is: ${answer}`)
}

console.log('Before myFunction')
myFunction()
console.log('After myFunction')
