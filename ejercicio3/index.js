function f() 
{
  // Formulario
  const operation = document.getElementById('operation').value

  // Valores
  let n1 = parseFloat(document.getElementById('n1').value), n2 = parseFloat(document.getElementById('n2').value), r=0

  if((n1 || n1==0) && (n1 || n1==0))
  {
    switch(operation)
  {
    case '+':
    r = n1 + n2
    break;
     
    case '-':
    r = n1 - n2
    break;

    case '*':
    r = n1 * n2
    break;
    
    case '/':
    r = n1 / n2
    break; 
  }
  }
  else
  {
    r = 0;
  }

  document.getElementById('result').innerText = r
}

function reiniciar()
{
  location.reload()
}