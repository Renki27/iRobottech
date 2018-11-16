/*const express = require('express');
const router = express.Router();


const mysqlConnection = require('../connectionDataBase/databaseConnection');
// GET all Students Acc
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});



// INSERT An Student
router.post('/', (req, res) => {
  const { idNumber, firstName, secondName, lastName1, lastName2, birth_date, phone, address, guardianName, guardianID, emergencyPhone, email } = req.body;
  console.log(idNumber, firstName, secondName, lastName1, lastName2, birth_date, phone, address, guardianName, guardianID, emergencyPhone, email);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Employeed Saved' });
    } else {
      console.log(err);
    }
  });

});
/*
router.post('/', (req, res) => {
  User.insertUser(userData, (err, data) => {
    if (data && data.insertId) {
      console.log(data);
      res.json({
        success: true,
        msg: 'Usuario Insertado',
        data: data
      })
    } else {
      res.status(500).json({
        success: false,
        msg: 'Error'
      })
    }
  });
});


*/