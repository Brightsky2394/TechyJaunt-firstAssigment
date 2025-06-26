const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    age: Number
},
{
    timestamps: true,
    versionKey: false
}
);

const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;