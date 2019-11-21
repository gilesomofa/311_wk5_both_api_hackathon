const mysql = require('mysql');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');


// Selects all users from the DB
const getEmployees = (req, res) => {
    pool.query('SELECT * FROM employees limit 100', (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
    
}

// Selects employee by employee number from the DB
const getEmployeesById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE emp_no = ?';
    sql = mysql.format(sql, [req.params.emp_no])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}

// Gets employees by first name
const getEmployeesByFirstName = (req, res) => {
    let sql = 'SELECT * FROM ?? WHERE first_name = ?';
    sql = mysql.format(sql, [first_name]);

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err);
        return res.json(rows);
    });
}

module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}
