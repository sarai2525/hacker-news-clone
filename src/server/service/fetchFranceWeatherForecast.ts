import weatherForecastClient from '../lib/weatherForecastClient'

export async function franceWeatherForecastService(): Promise<any> {
  const data = await weatherForecastClient.getFranceWeatherForecast()
  return data
}
