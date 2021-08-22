const fetch = require('node-fetch')

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