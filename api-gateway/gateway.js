const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const PORT = 3030

const app = express()

app.use(cors())
// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT'],
//         credentials: true,
//     })
// )

app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Gateway has started on PORT ${PORT}`)
})