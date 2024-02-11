const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
name :{
    type: String,
    require
},
email:{
    type: String,
    require
},
phoneNumber:{
    type: String,
    require
},
gender:{
    type: String,
    require
},
birthday:{
    type: String,
    require
},
address:{
    type: String,
    require
}
});

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;