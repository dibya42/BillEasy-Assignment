const { Router } = require('express');
const { get } = require('http');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEmployees);
router.get("/:id", controller.getEmployeesById);
router.post("/createEmply", controller.createEmplyTable);
router.post("/trigger", controller.triggerTable)


module.exports = router;