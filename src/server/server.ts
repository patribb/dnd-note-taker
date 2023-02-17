import express from 'express'

const app = express()
app.use(express.static('public'))

app.get('/hello', (req, res) => res.json('world!!!'))

app.listen(3000, () => console.log('🚀 Server runing on port 3000!'))