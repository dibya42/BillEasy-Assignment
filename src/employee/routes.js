const { Router } = require('express');
const { get } = require('http');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEmployees);
router.get("/:id", controller.getEmployeesById);
router.get("/:id", controller.getEmployeesByTheirIdWithDeparment);
router.post("/triggerEmply", controller.createEmplyTable)

module.exports = router;