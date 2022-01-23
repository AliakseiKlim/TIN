const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.text())
app.use(cors())

const size = 10
const scores = new Array(size).fill(0)

// Post score
app.post('/scores', (req, res) => {
    scores.push(req.body)
    scores.sort((score1, score2) => score2 - score1)

    // Clean up scores and leave only 10 first
    while (scores.length > size) {
        scores.pop()
    }

    res.send(scores)
})

// Get scores
app.get('/scores', (req, res) => {
    res.send(scores)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
