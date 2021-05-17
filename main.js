const https = require('https')

https.get('https://mindicador.cl/api', res => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk
    })

    res.on('end', () => {
        console.log(JSON.parse(data))
    })
}).on('error', (err) => {
    console.log("Error: " + err.message)
})