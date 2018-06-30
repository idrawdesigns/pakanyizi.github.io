const loadCurrency = () => {
  let to = document.getElementById('to')
  let from = document.getElementById('from')
  fetch('https://free.currencyconverterapi.com/api/v5/currencies').then(
    response => {
      response.json().then(data => {
        let options = ''
        for (key in data.results) {
          options = options + '<option>' + key + '</option>'
        }
        to.innerHTML = options
        from.innerHTML = options
      })
    }
  )
}

const convertCurrency = async () => {
  let from = document.getElementById('from').value
  let to = document.getElementById('to').value
  let currencyQueryString = `${from}_${to}`
  let amount = document.getElementById('amount').value
  let result = document.getElementById('show-result')

  if (from.length > 0 && to.length > 0 && amount.length > 0) {
    fetch(
      `https://free.currencyconverterapi.com/api/v5/convert?q=${currencyQueryString}&compact=ultra`
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        rate = data[currencyQueryString]
        let total = rate * amount
        result.innerHTML = total.toFixed(2)
        console.log(result.innerHTML)
        console.log(total)
      })
  }
}
