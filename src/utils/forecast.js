const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/5ac3e2c4d582518c4c78ebcc86284353/'+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            const data = body
            callback(undefined,data.daily.data[0].summary + ' '+data.currently.temperature + ' ' + data.currently.precipProbability)
        }
    })
    
  }

  module.exports=forecast