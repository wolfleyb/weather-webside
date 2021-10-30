
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


    if (location === '')
    {
        messageOne.textContent = ''
        return messageTwo.textContent = 'You must provide a location'
    }

    weatherUrl = '/weather?address=' + location

    fetch(weatherUrl).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = ''
                return messageTwo.textContent = data.error
            }
            
            console.log(data)

            displayOne = 'Weather for ' + data.location + ':'

            displayTwo = 'Description is ' + data.forecast.description + '.' +
                            ' Current temp is ' + data.forecast.currentTemp +
                            ' feels like ' + data.forecast.feelsLike + '.'

            messageOne.textContent = displayOne
            messageTwo.textContent = displayTwo
        })
    })

    console.log(location)
})