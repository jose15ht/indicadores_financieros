const https = require('https')

https.get('https://mindicador.cl/api', res => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk
    })

    res.on('end', () => {
        let information = JSON.parse(data)
        console.log(`Gracias por consultar el servicio financiero.
        Los indicadores para el día de hoy ${new Date(Date.now()).toLocaleDateString()} son:
        \tUF: ${information.uf.valor}
        \tDolar: ${information.dolar.valor}
        \tEuro: ${information.euro.valor}
        \tIPC: ${information.ipc.valor}
        \tLibra de Cobre: ${information.libra_cobre.valor}
        \tBitcoin: ${information.bitcoin.valor}`)
    })
}).on('error', (err) => {
    console.log("Error: " + err.message)
})