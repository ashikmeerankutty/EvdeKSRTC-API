import { Router } from 'express'
import getRoute from '../controllers/routeController'
import getLocation from '../controllers/locationController'

const router = Router()

router.get('/', (req, res) => res.send({"status":"working"}))
router.post('/route',getRoute)
router.get('/locations',getLocation)


export default router
