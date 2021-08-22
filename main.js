const fetch = require('node-fetch')

// https.get('https://mindicador.cl/api', res => {
//     let data = ''

//     res.on('data', (chunk) => {
//         data += chunk
//     })

//     res.on('end', () => {
//         let information = JSON.parse(data)
//         console.log(`Gracias por consultar el servicio financiero.
//         Los indicadores para el día de hoy ${new Date(Date.now()).toLocaleDateString()} son:
//         \tUF: ${information.uf.valor}
//         \tDolar: ${information.dolar.valor}
//         \tEuro: ${information.euro.valor}
//         \tIPC: ${information.ipc.valor}
//         \tLibra de Cobre: ${information.libra_cobre.valor}
//         \tBitcoin: ${information.bitcoin.valor}`)
//     })
// }).on('error', (err) => {
//     console.log("Error: " + err.message)
// })

const getExchange = async () => {
    const resp = await fetch('https://mindicador.cl/api')
    const data = await resp.json()
    return data
}

const message = async () => {
    const info = await getExchange()
    console.log(`Gracias por consultar el servicio financiero.
    Los indicadores para el día de hoy ${new Date(Date.now()).toLocaleDateString()} son:
    \tUF: ${info.uf.valor}
    \tDolar: ${info.dolar.valor}
    \tEuro: ${info.euro.valor}
   \tIPC: ${info.ipc.valor}
    \tLibra de Cobre: ${info.libra_cobre.valor}
   \tBitcoin: ${info.bitcoin.valor}`)
}

message()