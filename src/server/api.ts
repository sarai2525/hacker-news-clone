import express, { Router } from 'express'
import { tokyoWeatherForecastService } from './service/fetchTokyoWeatherForecast'

const app = express()
const router = Router()
app.use(express.json())

// Move to server/express-app/routes/test.ts, anywhere really, but avoid server/api and server/middleware
router.get('/tokyo-weather-forecast', async (req, res, next) => {
  try {
    const result = await tokyoWeatherForecastService()
    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

// FIXME: cannot add router path
// Error: Router.use() requires a middleware function but got a string
app.use('/api/', router)

// Catch-all
app.use((_req, res) => res.status(200).json({ route: '/*' }))

// eslint-disable-next-line no-undef
export default fromNodeMiddleware(app)
