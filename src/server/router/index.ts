import { Router } from 'express'
import getTokyoWeatherForecast from './tokyoWeatherForecast'

const router = Router()
router.get('/tokyo-weather-forecast', getTokyoWeatherForecast)

export default router
