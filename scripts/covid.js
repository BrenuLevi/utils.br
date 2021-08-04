// ? Create HTTP request
const request = new XMLHttpRequest()

// ? Open HTTP request
request.open(
  'GET',
  'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
  true
)

// ? Set type of response
request.responseType = 'json'
// ? Send request
request.send()

// ? When response availabe, get the response
request.onload = function () {
  let { response } = request

  let numberFormatter = new Intl.NumberFormat('pt-br')

  // ? Data
  document.querySelector('.cases p').innerHTML = numberFormatter.format(
    response.data.cases
  )
  document.querySelector('.confirmed-cases p').innerHTML =
    numberFormatter.format(response.data.confirmed)
  document.querySelector('.deaths p').innerHTML = numberFormatter.format(
    response.data.deaths
  )

  // ? Date of update
  let date = response.data.updated_at.substr(0, 10).split('-')
  document.querySelector('.covid-date-time').innerHTML =
    'Dados atualizados em: ' +
    new Date(date[0], date[1] - 1, date[2]).toLocaleDateString()
}
