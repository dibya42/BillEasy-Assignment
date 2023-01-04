const getEmployees = "SELECT * FROM employee";
const getEmployeesById = "SELECT * FROM employee WHERE id = $1";
const  getEmployeesByTheirIdWithDeparment = "SELECT * FROM employee JOIN deparment WHERE id = $1";
const checkNoExists = "SELECT s FROM employee s WHERE s.mobile_no = $1";
const createEmplyTable = "INSERT INTO employee (name, address, join_date) VALUES ($1,$2)";
module.exports = {
    getEmployees, getEmployeesById,checkNoExists, getEmployeesByTheirIdWithDeparment,createEmplyTable
}