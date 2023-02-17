import express from 'express'
import morgan from 'morgan'
import routes from './routes'
import config from './config'
import {notFoundHndler, globalErrorHandler} from './middlewares/error-handlers'

const app = express()

//NOTE: status checkpoints
app.get('/status', (req, res) => res.sendStatus(200))
app.head('/status', (req, res) => res.sendStatus(200))

app.use(express.static('public'))
app.use(express.json())
app.use(morgan('dev'))
app.use(routes)
app.use(notFoundHndler)
app.use(globalErrorHandler)

app.listen(config.app.port, () => console.log(`🚀 Server runing on port ${config.app.port}!`))

