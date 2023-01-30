const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const errorHandler = require('./middleware/errorHandler')

//Setting the PORT constant to either the PORT environment variable or 3500.
const PORT = process.env.PORT || 3500

app.use(cors(corsOptions))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))
app.use('/token', require('./routes/tokenRoutes'))
app.use('/time', require('./routes/timeRoutes'))
app.use('/metrics', require('./routes/metricsRoutes'))
app.use(errorHandler)

//Starting the server to listen on the specified PORT and logging a message to the console.
app.listen(PORT, () => console.log(`server running on port ${PORT}`));