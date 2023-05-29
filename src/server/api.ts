import express from 'express'
import router from './router/index'

const app = express()
app.use(express.json())
app.use('/api/', router)
// Catch-all
app.use((_req, res) => res.status(200).json({ route: '/*' }))

// eslint-disable-next-line no-undef
export default fromNodeMiddleware(app)
