var express = require('express');
var router = express.Router();
const dogsCtrl = require('../controllers/api/dogs')

/* GET users listing. */
router.get('/', dogsCtrl.index)
router.get('/:id', dogsCtrl.show)
router.post('/', dogsCtrl.new)
router.put('/:id', dogsCtrl.show)
router.delete('/:id', dogsCtrl.delete)

module.exports = router;
