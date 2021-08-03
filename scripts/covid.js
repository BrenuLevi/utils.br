const request = new XMLHttpRequest()

request.open(
  'GET',
  'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
  true
)

request.responseType = 'json'
request.send()

request.onload = function () {
  let { response } = request

  document.querySelector('.cases p').innerHTML = response.data.cases
  document.querySelector('.confirmed-cases p').innerHTML =
    response.data.confirmed
  document.querySelector('.deaths p').innerHTML = response.data.deaths

  let date = response.data.updated_at.substr(0, 10).split('-')
  let time = response.data.updated_at.substr(11, 8)
  document.querySelector('.covid-date-time').innerHTML =
    'Dados atualizados em: ' +
    new Date(date[0], date[1] - 1, date[2]).toLocaleDateString()
}
