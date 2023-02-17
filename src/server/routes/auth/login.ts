import { Router } from 'express'

const router = Router()

//NOTE: POST /auth/login
router.post('/', (req, res, next) => {
    res.json(req.body)
})

export default router
