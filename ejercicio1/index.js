const valores = [true, 5, false, 'hola', 'adios', 2, true]
const maxLengthIndex = 'No hay cadenas de texto'
const suma = 0, resta = 0, cuenta = 0
const maximo = Number.MIN_VALUE
const minimo = Number.MAX_VALUE
const booleans = []
let and
let or
const $RESULTADO = document.getElementById('result')

for (const i = 0; i < valores.length; i++) {

  switch (typeof valores[i]) {

    case 'string':
      if (valores[i].length >= 0) maxLengthIndex = i
      break;

    case 'number':
      cuenta++
      suma += valores[i]
      resta -= valores[i]
      if(valores[i] > maximo) maximo = valores[i]
      if(valores[i] < minimo) minimo = valores[i]
      break;

    case 'boolean':
      booleans.push(valores[i])
      break;

    default:
      break;
  }

}

const media = suma / cuenta
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
