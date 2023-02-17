import { Router } from 'express'
const router = Router()

//NOTE: GET api/notes/
router.get('/', (req, res, next) => {
  try {
    throw new Error('test error')
    res.json('get all notes')
  } catch (error) {
    next(error)
    // res.status(500).json({errorr: {msg: 'my code sucks', error: error.message}})
  }
});

export default router
