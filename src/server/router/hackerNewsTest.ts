import { hackerNewsService } from '../service/fetchHackerNews'

export default [
  async (_req, res, next) => {
    try {
      const result = await hackerNewsService()
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },
]
