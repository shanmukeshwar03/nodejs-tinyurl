import { Router } from 'express'
import UrlController from '../Controllers/Url.js'

const router = Router()

router.get('/', UrlController.GetUrl)
router.post('/', UrlController.PostUrl)
router.delete('/:shr', UrlController.DeleteUrl)

export default router
