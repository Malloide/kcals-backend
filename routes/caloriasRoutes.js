// routes/caloriasRoutes.js
const express = require('express')
const getAlgo = require('../controllers/caloriasController')
const router = express.Router()

// Define tus rutas aquí 
router.get('/calorias', (req, res) => {

    response = getAlgo()
    res.send(response)
})

// Puedes agregar más rutas aquí

module.exports = router
