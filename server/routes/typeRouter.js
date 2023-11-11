const Router = require ('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', typeController.create) //создавать бренды
router.get('/', typeController.getAll) //получать бренды

module.exports = router