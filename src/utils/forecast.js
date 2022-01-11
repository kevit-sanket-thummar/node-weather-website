const axios = require('axios')

const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=1382abc8668ae84b5bf4871c8ebb4085&query=' + latitude + ',' + longitude;
   
    // console.log(url)
    axios.get(url)
    .then(({data}) =>{
        // console.log(response)
        // console.log('check data =',data)
        //console.log('check error =',error)

            if(data.error){
                //console.log('Error=', data.error)
                callback('Unable to connect to location',undefined)
            }
            else{
                // console.log(error)
            // console.log()
            callback(undefined, data.current.weather_descriptions[0] + '. It is currently ' +  data.current.temperature + ' degrees out. It feels like' +data.current.feelslike +'There is a '+ data.current.precip + '% chance of rain & the humidity is' + data.current.humidity + '%')
            }
    })
    .catch((error)=>{
        // console.log(error)
        
            if(!error.response){
                //console.log('Error=',error)
            callback('Unable to connect to weather services', undefined)

            }
        })
}

module.exports = forecast