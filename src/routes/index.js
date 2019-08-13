import { Router } from 'express'
import getRoute from '../controllers/routeController'

const router = Router()

router.get('/', (req, res) => res.send({"status":"working"}))
router.post('/route',getRoute)


export default router
