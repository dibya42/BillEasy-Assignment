const getEmployees = " SELECT * FROM employee FULL OUTER JOIN department ON employee.id = department.emp_id;";
const getEmployeesById = " SELECT * FROM employee LEFT JOIN department ON employee.id = department.emp_id WHERE employee.id = $1";
const createEmplyTable = "INSERT INTO employee (id, name, address, join_time) VALUES ($1, $2, $3, $4)";
const triggerTable = " INSERT INTO employee (id, name, address, join_time) VALUES ($1, $2, $3, $4) CREATE OR REPLACE FUNCTION calc_count() return trigger as $$ declare count numeric; begin count = new.id+1; new.total_emp = count; return new; end;$$ language plpgsql; create trigger cal_total_emp after insert  on department for each row excute procedure cal_total_emp();" 

module.exports = {
    getEmployees, getEmployeesById,
     createEmplyTable, triggerTable
}