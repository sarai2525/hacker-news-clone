import weatherForecastClient from '../lib/weatherForecastClient'

export async function testService(): Promise<any> {
  const data = await weatherForecastClient.getTokyoForecast()
  return data
}
