const request = require('request')


const forecast = (lat, lon, callback) => {
    url = 'https://api.openweathermap.org/data/2.5/onecall?lat='
            + lat + '&lon=' + lon + 
            '&appid=5fe721189843f1db26105d5371c21587&units=imperial'


    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.cod === '400'){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                currentTemp: body.current.temp,
                feelsLike: body.current.feels_like,
                description: body.current.weather[0].description,
            })
        }
    })


}


module.exports = forecast