const pool = require('../db');
const queries = require('./queries');

const getEmployees = (req,res) =>{
    pool.query(queries.getEmployees, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    });
};

const getEmployeesById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeesById, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getEmployeesByTheirIdWithDeparment = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeesByTheirIdWithDeparment, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const createEmplyTable = (req,res)=>{
    const {name, address, join_time} = req.body
            if(error) throw error;
            res.status(201).send("Employee inserted");

};

module.exports ={
    getEmployees, getEmployeesById,getEmployeesByTheirIdWithDeparment,createEmplyTable
}