const Student = require("../models/student.schema");

const createStudent = async (req, res) => {
    const { firstName, lastName, email, age } = req.body;

    if (!firstName || !lastName || !email || !age) {
        return res.status(400).json({
            message: "Fields are required"
        })
    }

    try {
        const confirmEmail = await Student.findOne({ email });
        if (confirmEmail) {
            return res.status(409).json({
                message: "Conflict, email already exist"
            })
        }
        const newStudent = new Student({ firstName, lastName, email, age });
        await newStudent.save();
        return res.status(201).json({
            message: `Newly created student document (with ${newStudent._id})`,
            newStudent
        })
    } catch (err) {
        console.log("Error creating student\n", err.message);
        return res.status(500).json({
            message: "internal server error"
        })
    }
};

const getAllStudents = async (req, res) => {
    const { lastName, page=1, limit=10 } = req.query;
    const filterObj = {};
    if (lastName) {
        filterObj.lastName = {$regex: new RegExp(lastName, 'i')}
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skipNum = ( pageNum - 1 ) * limitNum;

    try {
        const students = await Student.find(filterObj).skip(skipNum).limit(limitNum);
        if (!students) {
            return res.status(404).json({
                message: "student not found"
            })
        }
        const totalDocumentsCount = await Student.countDocuments();
        return res.status(200).json({
            message: "Array of all student documents",
            pageNum,
            limitNum,
            totalDocumentsCount,
            students
        })
    } catch (err) {
        console.error("Error in retrieving student records\n", err.message);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const updateStudentRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, age } = req.body;
        if (!id) {
            return res.status(404).json({
              message: "student record not found"
          })
      }
    const newRecord = { firstName, lastName, email, age};
    const modifyStudent = await Student.findByIdAndUpdate(id, newRecord, { new: true } );
    return res.status(200).json({
        message: "Updated student document",
        modifyStudent
    })
    } catch (err) {
        console.error("Error updating student record\n", err.message);
        return res.status(500).json({
            message: "internal server error"
        })
    }
};

const deleteStudentRecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).json({
                message: "student not found"
            })
        }
        const deleteStudent = await Student.findByIdAndDelete(id);
        return res.status(200).json({
            message: `Success message / deleted student ${deleteStudent._id}`,
            deleteStudent
        })
    } catch (err) {
        console.error('Error deleting student\n', err.message);
        return res.status(500).json({
            message: "internal server error"
        })
    }
};

const getStudentsCount = async (req, res) => {
    try {
        const student = await Student.find();
        if (student.length <= 0) {
            return res.status(400).json({
                message: "student record must be at least one"
            })
        }
        return res.status(200).json({
            message: `${student.length} records of students is successfully retrieved`,
            count: student.length
        })
    } catch (err) {
        console.error("Error retrieving student record count\n", err.message);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


module.exports = { createStudent, getAllStudents, updateStudentRecord, deleteStudentRecord, getStudentsCount };