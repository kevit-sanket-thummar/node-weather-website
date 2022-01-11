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
            callback(undefined,'It is currently ' +  data.current.temperature + ' degrees out.' +'There is a '+ data.current.precip + '% chance of rain.')
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