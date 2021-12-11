import { Router } from 'express'
import ShrController from '../Controllers/Shr.js'

const router = Router()

router.get('/:shr', ShrController.GetUrl)

export default router
