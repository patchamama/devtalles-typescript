;(() => {
  const batman: string = 'Batman'
  const linternaVerde: string = 'Linterna Verde'
  const volcanNegro: string = `Héroe: Volcán Negro`

  const concat = `${batman} ${linternaVerde}`

  const abc = 123

  console.log(`I am ${batman} ${abc}`)

  console.log(concat.toUpperCase())

  console.log(batman[10]?.toUpperCase() || 'No está presente')
})()
