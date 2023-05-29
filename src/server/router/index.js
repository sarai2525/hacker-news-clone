import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.status(200).json({ route: '/api/test' }))

export default router
