import express, { json } from 'express'

const app = express()
const controller = './controller/index.ts'

app.use(json())

app.use((_req, _res, next) => {
  console.log('log')
  next()
})

app.use('/api/', controller)

// eslint-disable-next-line no-undef
export default fromNodeMiddleware(app)
