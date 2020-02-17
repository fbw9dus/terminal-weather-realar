const axios = require('axios');

const args = process.argv.slice(2)
const city = args[0]
const api_key = '9f60ecbd4d873a9088d289e797a16fa2'
const units = 'metric'
const request_url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`


const wetter= async()=>{
    const response = await axios.get(request_url)
    const data = await response.data
    
    console.log(
        `It is now ${data.main.temp}°C in ${data.name}, ${data.sys.country}\nThe current weather conditions are:${data.weather[0].description}`
        )
    
}
wetter()
