import weatherForecastClient from '../lib/weatherForecastClient'

export async function testService() {
  const { data } = await weatherForecastClient.getTokyoForecast
  return data
}
