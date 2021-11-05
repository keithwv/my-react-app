const express = require('express')
const Router = require('./Routes/ZombieApocalpyseRoutes.js')
const story = require('./Model/Story.js')

const app = express()
const port = 3000

app.use(Router)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})