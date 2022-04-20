const a = document.getElementById('form')
const b = document.getElementById('n1')
const c = document.getElementById('n2')
const d = document.getElementById('operation')
const e = document.getElementById('result')

function f ( e ) {
  e.preventDefault()
  
  var n1 = b.value
  var n2 = c.value
  var operation = d.value
  var r

  a.reset()

  if ((n1 || n1 == 0) && (n2 || n2 == 0) && operation) {
    if (operation == '+') {
      r = n1 + n2
    }
    else if (operation == '-') {
      r = n1 - n2
    }
    else if (operation == '*') {
      r = n1 * n2
    }
    else {
      r = n1 / n2
    }
  }
  else {
    alert('Falta algún valor por definir')
  }

  e.innerText = r

}

a.addEventListener('submit', f)
a.addEventListener('reset', () => e.innerText = 'Esperando operación.')
