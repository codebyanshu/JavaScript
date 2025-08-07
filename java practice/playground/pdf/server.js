const express = require('express')
const Path2D = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(Path2D.join(__dirname,"index.html"))
})

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`)
})