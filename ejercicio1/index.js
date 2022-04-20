var valores = [true, 5, false, 'hola', 'adios', 2, true]
let actual
let length = 0
let maxLengthIndex = 'No hay cadenas de texto'
let suma = 0
let resta = 0
let cuenta = 0
let media = 0
let maximo = Number.MIN_VALUE
let minimo = Number.MAX_VALUE
let booleans = []
let and
let or
const $RESULTADO = document.getElementById('result')

for (let i = 0; i < valores.length; i++) {

  actual = valores[i]

  switch (typeof actual) {
    case 'string':
      if (actual.length >= length) maxLengthIndex = i
      break;
    case 'number':
      cuenta++
      suma += actual
      resta -= actual
      if(actual > maximo) maximo = actual
      if(actual < minimo) minimo = actual
      break;
    case 'boolean':
      booleans.push(actual)
      break;
    default:
      break;
  }

}

media = suma / cuenta
and = booleans.reduce((previous, current) => previous && current, true)
or = booleans.reduce((previous, current) => previous || current, false)

$RESULTADO.innerText = `
  ${valores}
  String más largo: '${valores[maxLengthIndex]}',
  Suma: ${suma},
  Resta: ${resta},
  Media: ${media},
  Máximo: ${maximo},
  Mínimo: ${minimo},
  Operador AND: ${and},
  Operador OR: ${or}
`
