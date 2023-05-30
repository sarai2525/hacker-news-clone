import { franceWeatherForecastService } from '../service/fetchFranceWeatherForecast'

export default [
  async (_req, res, next) => {
    try {
      const result = await franceWeatherForecastService()
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },
]
