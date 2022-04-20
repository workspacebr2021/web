
// const insertAtivo = require("./db")
const findByAtivo = require("./Querys/findByAtivo")
const lineCount = require("./Querys/lineCount")
const express = require('express')
const cors = require("cors")
const app = express()
const port = 80

app.use(cors())
app.use(express.json())

app.get('/ativo/:ativo', async (req, res) => {
    const { ativo } = req.params
    const result = await findByAtivo(ativo)
    // console.log(result)
    return res.json(result)
})

app.get('/count/:valor', async (req, res) => {
    const { valor } = req.params
    const result = await lineCount(valor)
    // console.log(result)
    return res.json(result)
})

// app.post('/ativo', async(req, res) => {
//     console.log("Outra coisa")
//     const {ativo, hostname} = req.body
//     const result = await insertAtivo(ativo, hostname)
//     return res.json(result)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
