const http   = require('http')
const url = 'http://api.weatherstack.com/current?access_key=b033ef3ea408ca2ad005b33891cb87f7&query=60.7,44.1&units=f'

const request = http.request(url,(response)=>{
    let data =''
    response.on('data',(chunk)=>{
        data = data+ chunk.toString()
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body);
    })
})
request.on('error',(error)=>{
console.log("Error: " + error);
})
request.end()