const Router = require ('express')
const router = new Router()
const brandController = require ('../controllers/brandController')

router.post('/', brandController.create) //создавать бренды
router.get('/',brandController.getAll) //получать бренды


module.exports = router