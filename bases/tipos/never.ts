;(() => {
  // never no es undefined, no es null, no es void, no es void (nada)
  // cuando se usa never, la función nunca retorna nada y no se seguirá ejecutando,
  // es decir, la función nunca termina y el código revienta en ese punto
  const error = (message: string): never => {
    throw new Error(message)
  }
  const abc = (message: string): never | number => {
    if (false) {
      throw new Error(message)
    }
    return 1
  }

  error('Auxilio!!')
})()
