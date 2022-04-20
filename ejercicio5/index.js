function MayusculasAlternas (s)
{
    var splitted = s.toLowerCase().split(' ');

    for (let i = 0; i < splitted.length; i++)
    {
        var n = ''

        for (let j = 0; j < splitted[i].length; j++) {
          if (j % 2 == 0) {
            n += splitted[i][j].toUpperCase()
          }
          else {
            n += splitted[i][j]
          }
        }

        splitted[i] = n
    }

    console.log(splitted.join(' '))
}
