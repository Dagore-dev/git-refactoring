function MayusculasAlternas (cadena)
{
    cadena = cadena.toLowerCase().split(' ');

    for (let i = 0; i < cadena.length; i++)
    {
        var aux = ''

        for (let j = 0; j < cadena[i].length; j++) {
          if (j % 2 == 0) {
            aux += cadena[i][j].toUpperCase()
          }
          else {
            aux += cadena[i][j]
          }
        }

        cadena[i] = aux
    }

    console.log(cadena.join(' '))
}
