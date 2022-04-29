function ConsonantesSeguidas (textoriginal)
{
  console.log(textoriginal)  
  let texto = textoriginal.toLowerCase()
    const consonantes = 'bcdfghjklmnñpqrstvwxyz'
    let resultado = false

    if (texto.length > 1)
    {
        for (let i = 0; i < texto.length - 1; i++)
        { 
            if (consonantes.includes(texto[i]) && consonantes.includes(texto[i + 1]))
            {
                resultado = true
                i = texto.length
            }
        }
    }

    console.log(resultado)
}
