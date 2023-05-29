import { ofetch, $Fetch } from 'ofetch'

const BASE_URL = 'https://api.open-meteo.com/v1'
const QUERY = {
  latitude: 35.6785,
  longitude: 139.6823,
  hourly: 'temperature_2m',
  timezone: 'Asia/Tokyo',
}

class WeatherForecastClient {
  private client: $Fetch

  constructor() {
    this.client = ofetch.create({
      baseURL: BASE_URL,
      async onRequest({ request, options }) {
        console.log('[fetch request]', request, options)
        options.query = options.query || {}
        options.query.t = new Date()
      },
    })
  }
  public async getTokyoForecast() {
    const result = await this.client('/forecast', {
      query: QUERY,
    })
    return result
  }
}

export default new WeatherForecastClient()
