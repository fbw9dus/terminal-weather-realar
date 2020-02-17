const args = process.argv.slice(2)
const days = args[0]
const city = args[1]
const deg = args[2]
const axios = require('axios')
const url = require('url')
const api_base_url = `http://api.openweathermap.org/data/2.5/${days}`
const api_endpoint = `?q=${city}`
const api_key = '9f60ecbd4d873a9088d289e797a16fa2'

const request_url = url.resolve(api_base_url, api_endpoint) + `&appid=${api_key}` + `&units=${deg}`

async function getWeather() {
    const res = await axios.get(request_url)
    var data = await res.data


    if (days == 'weather') {
        
        console.log(`It is now ${data.main.temp}C° in ${data.name}, ${data.sys.country}
     The current weather conditions are: ${data.weather[0].description}`)


    } else if (days == 'forecast'){
        // var data = JSON.stringify(data)
        console.log(data.list[0].main.temp)
        //console.log(data)
    }

}

getWeather()