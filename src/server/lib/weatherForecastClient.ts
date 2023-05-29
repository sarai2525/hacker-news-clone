import { ofetch, $Fetch } from 'ofetch'
const BASE_URL = 'https://api.open-meteo.com/v1'

class WeatherForecastClient {
  private client: $Fetch

  constructor() {
    this.client = ofetch.create({
      baseURL: BASE_URL,
      async onRequest({ request, options }) {
        const { baseURL } = options
        console.log('[fetch request]', `${baseURL}${request}`)
        options.query = options.query || {}
        options.query.t = new Date()
      },
    })
  }
  public async getTokyoForecast() {
    const query = {
      latitude: 35.6785,
      longitude: 139.6823,
      hourly: 'temperature_2m',
      timezone: 'Asia/Tokyo',
    }
    const result = await this.client('/forecast', {
      query,
    })
    return result
  }
}

export default new WeatherForecastClient()
