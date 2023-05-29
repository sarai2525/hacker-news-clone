import weatherForecastClient from '../lib/weatherForecastClient'

export async function tokyoWeatherForecastService(): Promise<any> {
  const data = await weatherForecastClient.getTokyoWeatherForecast()
  return data
}
