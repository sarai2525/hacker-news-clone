import { tokyoWeatherForecastService } from '../service/fetchTokyoWeatherForecast'

export default [
  async (_req, res, next) => {
    try {
      const result = await tokyoWeatherForecastService()
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },
]
