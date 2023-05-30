// API https://open-meteo.com/en/docs#latitude=35.69&longitude=139.69&hourly=temperature_2m

import { ofetch, $Fetch } from 'ofetch'
import { consola } from 'consola'

const BASE_URL = 'https://api.open-meteo.com/v1'

type RequestQuery = {
  latitude: number
  longitude: number
  hourly?: string
  daily?: string
  timezone: string
}

//api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&timezone=Asia%2FTokyo

class WeatherForecastClient {
  private client: $Fetch

  constructor() {
    this.client = ofetch.create({
      baseURL: BASE_URL,
      async onRequest({ request, options }) {
        const { baseURL } = options
        consola.info({
          message: `[Fetch request] ${baseURL}${request}`,
          badge: true,
        })
        options.query = options.query || {}
        options.query.t = new Date()
      },
      async onRequestError({ error }) {
        consola.error({
          message: error.message,
          badge: true,
        })
      },
      async onResponse({ response }) {
        if (response.statusText === 'OK') {
          consola.success('[Succeed to request]', response._data)
          return
        }
        consola.error('[Failed to request]', response._data.reason)
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
    const result = await this.client('/forecast', {
      query,
    })
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
