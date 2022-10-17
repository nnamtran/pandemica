const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.get('/fakeapi', (req, res, next) => {
    res.send('Hello from fake api server')
    console.log('received request')
})

app.listen(PORT, () => {
    console.log(`Fake server started on port ${PORT}` )
})