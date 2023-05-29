import { ofetch, $Fetch } from 'ofetch'

const BASE_URL = 'https://api.open-meteo.com'
const QUERY = {
  latitude: 35.6785,
  longitude: 139.6823,
  hourly: 'temperature_2m',
  timezone: 'Asia%2FTokyo',
}

class WeatherForecastClient {
  private client: $Fetch

  constructor() {
    this.client = ofetch.create({ baseURL: BASE_URL })
  }
  public async getTokyoForecast() {
    const { data } = await this.client('/v1/forecast', {
      query: QUERY,
    })
    return data
  }
}

export default new WeatherForecastClient()
