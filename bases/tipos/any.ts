;(() => {
  let avenger: any = 123
  const exists = avenger?.name ?? 'No existe'
  let power

  //   avenger = 'Dr. Strange'
  console.log(avenger.charAt(0))
  console.log((avenger as string).charAt(0))
  console.log({ exists, power })

  avenger = 150.555555
  console.log(avenger.toFixed(2))
  console.log(<number>avenger.toFixed(2))
})()
