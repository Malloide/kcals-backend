
const express  = require('express')
  
const caloriasRoutes = require('./routes/caloriasRoutes')

const app = express()

// Usa las rutas importadas
app.use('/api/calorias', caloriasRoutes)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
