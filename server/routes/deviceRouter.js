const Router = require ('express')
const router = new Router()
const deviceController = require ('../controllers/deviceController')

router.post('/', deviceController.create) //создавать девайс
router.get('/', deviceController.getAll) //получать девайсы
router.get('/:id', deviceController.getOne) //получить конкретный девайс

module.exports = router