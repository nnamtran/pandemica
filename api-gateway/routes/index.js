const express = require('express')
const router = express.Router()
const axios = require('axios')
const registry = require('./registry.json')
const cors = require('cors')

router.use(cors())

router.all('/:apiName/:path', (req, res) => {
    // console.log(req.query)
    if (registry.services[req.params.apiName]) {
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            data: req.body,
            params: req.query
        }).then((response) => {
            res.send(response.data)
        })
    } else {
        res.send('API name does not exist')
    }
    
})

module.exports = router