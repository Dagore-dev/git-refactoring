var data = [
  {name: 'David', points: 12, destroyed: 1565},
  {name: 'Javi', points: 8, destroyed: 1000},
  {name: 'Daniel', points: 20, destroyed: 2000},
  {name: 'José', points: 0, destroyed: 150},
  {name: 'Edmundo', points: 15, destroyed: 255},
  {name: 'Patricia', points: 5, destroyed: 125},
  {name: 'Fortunata', points: 18, destroyed: 1300},
  {name: 'Jacinta', points: 2, destroyed: 520},
  {name: 'Carmencita', points: 18, destroyed: 1010},
  {name: 'Silvia', points: 2, destroyed: 230},
]

for (var item of data) {
  document.querySelector('#antes span').innerText += item.name + ' ' + item.points + ' ' + item.destroyed + ',' + '\n'
}

data.sort( (p1, p2) => {
  var a

  if (p1.points != p2.points) {
    a = p1.points > p2.points ? 1 : -1
  } else {
    if (p1.destroyed != p2.destroyed) {
      a = p1.destroyed > p2.destroyed ? 1 : -1
    } else {
      a = 0
    }
  }

  return a
})

for (var item of data) {
  document.querySelector('#despues span').innerText += item.name + ' ' + item.points + ' ' + item.destroyed + ',' + '\n'
}
