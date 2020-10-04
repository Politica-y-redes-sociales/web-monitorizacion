const express = require('express');

const controller=require('../controllers/ControllerServideresStaus');

const router = express.Router();


router.get('/api/servidores/status',controller.StatusServidores);
router.put('/api/servidor/:servidor',controller.ActualizarServidor);

module.exports = router;