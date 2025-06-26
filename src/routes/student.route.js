const express = require('express');
const { createStudent, getAllStudents, updateStudentRecord, deleteStudentRecord } = require('../controller/student.controller');

const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getAllStudents);
router.put('/students/:id', updateStudentRecord);
router.delete('/students/:id', deleteStudentRecord);

module.exports = router;