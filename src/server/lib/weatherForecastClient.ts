import ky from 'ky'

const BASE_URL = 'https://api.open-meteo.com/v1'

// Type de requête
type RequestQuery = {
  latitude: number
  longitude: number
  hourly?: string
  daily?: string
  timezone: string
}

class WeatherForecastClient {
  private client: typeof ky

  constructor() {
    this.client = ky.create({
      prefixUrl: BASE_URL,
      hooks: {
        beforeRequest: [
          (request) => {
            const url = new URL(request.url)
            url.searchParams.append('t', new Date().toISOString())

            return new Request(url.toString(), request)
          },
        ],
        afterResponse: [
          (request, options, response) => {
            if (response.ok) {
              console.log('[Succeed to request]', response)
              return response
            }
            console.error('[Failed to request]', response)
          },
        ],
      },
    })
  }

  public async getTokyoWeatherForecast() {
    const query: RequestQuery = {
      latitude: 35.6785,
      longitude: 139.6823,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,rain_sum',
      timezone: 'Asia/Tokyo',
    }
    const result = await this.client.get('forecast', { searchParams: query }).json()
    return result
  }

  public async getFranceWeatherForecast() {
    const query: RequestQuery = {
      latitude: 46.0,
      longitude: 2.0,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,rain_sum',
      timezone: 'Europe/Paris',
    }
    const result = await this.client.get('forecast', { searchParams: query }).json()
    return result
  }
  public async getFranceWeatherForecast() {
    const query: RequestQuery = {
      latitude: 46.0,
      longitude: 2.0,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min,rain_sum',
      timezone: 'Europe/Paris',
    }
    const result = await this.client('/forecast', {
      query,
    })
    return result
  }
}

export default new WeatherForecastClient()
