import { Router } from 'express'
import getTokyoWeatherForecast from './tokyoWeatherForecast'
import getFranceWeatherForecast from './franceWeatherForecast'

const router = Router()
router.get('/tokyo-weather-forecast', getTokyoWeatherForecast)
router.get('/france-weather-forecast', getFranceWeatherForecast)

export default router
