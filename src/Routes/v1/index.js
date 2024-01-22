const router = require('express').Router();

const { infoController } = require('../../Controllers/index');

router.get('/info',infoController.info);

module.exports = router;