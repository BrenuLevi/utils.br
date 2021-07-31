let week = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

let months = [
  'NoMonth',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

let date = new Date()

setInterval(() => {
  date = new Date()
  document.querySelector('.clock-text').innerHTML = date.toLocaleTimeString()
}, 1000)

let dateTimeZone = Date().slice(
  Date().indexOf('(') + 1,
  Date().lastIndexOf(')')
)

document.querySelector('.fuse-text').innerHTML = dateTimeZone

let utcHour = date.getUTCHours()
document.querySelector('.gmt-text').innerHTML =
  'GMT' + (date.getHours() - utcHour)

let dateDay = date.getDate()
let dateMonth = date.getMonth() + 1
let dateYear = date.getFullYear()
let dateText = document.querySelector('.date-text')
dateText.innerHTML =
  returnFormatedData(dateDay) +
  '/' +
  returnFormatedData(dateMonth) +
  '/' +
  dateYear

dateText.addEventListener('mouseover', () => {
  dateText.innerHTML =
    returnFormatedData(dateDay) + '/' + months[dateMonth] + '/' + dateYear
})

dateText.addEventListener('mouseout', () => {
  dateText.innerHTML =
    returnFormatedData(dateDay) +
    '/' +
    returnFormatedData(dateMonth) +
    '/' +
    dateYear
})

let weekDay = date.getDay()
document.querySelector('.week-day-text').innerHTML = 'Hoje é: ' + week[weekDay]

function returnFormatedData(input) {
  if (input < 10) {
    return `0${input}`
  } else {
    return input
  }
}
