function ConsonantesSeguidas (s)
{
  console.log(s)  
  var sample = s.toLowerCase()
    var consonantes = 'bcdfghjklmnñpqrstvwxyz'
    var result = false

    if (sample.length > 1)
    {
        for (var i = 0; i < sample.length - 1; i++)
        { 
            if (consonantes.includes(sample[i]) && consonantes.includes(sample[i + 1]))
            {
                result = true
                i = sample.length
            }
        }
    }

    console.log(result)
}
