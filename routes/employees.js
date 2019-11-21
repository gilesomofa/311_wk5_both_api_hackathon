


const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees')

router.get('/employees', employeesController.getEmployees);
router.get('/employees/:emp_no', employeesController.getEmployeesById);
router.get('/first_name/:first_name', employeesController.getEmployeesByFirstName);




module.exports = router 


