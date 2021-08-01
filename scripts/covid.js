const request = new XMLHttpRequest()

request.open(
  'GET',
  'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
  true
)

request.responseType = 'json'
request.send()

request.onload = function () {
  let test = request.response

  console.log(test.data)
}
