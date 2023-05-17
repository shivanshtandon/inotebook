const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
app.use(express.json())
const port = 5000

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook app backend listening at http://localhost:${port}`)
})
