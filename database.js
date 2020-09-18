const mongoose = require('mongoose');
const config = {
    autoIndex: true,
    useNewUrlParser: true
}

const connectionString = 'mongodb+srv://userDemo:passwordDemo@democluster.ybo6v.gcp.mongodb.net/DemoCluster?retryWrites=true&w=majority';
mongoose.connect(connectionString, config)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.logh('Cannot connect to MongoDB', err));

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    class: String,
    hobbies: [String],
    isStudying: {type: Boolean, default: true},
    score: {type: Number, default: 0}
});

const Student = mongoose.model('Student', studentSchema);
// const createStudent = async () => {
//     const student = Student({
//         id: '60070046',
//         name: 'Prachya',
//         hobbies: ['Bit'],
//         class: 'IT15',
//         score: 29
//     });
//     const data = await student.save();
//     console.log(data)
// }

// createStudent();

const query = {score : {$gt:20}, class: /15$/}
async function getStudents(condition) {
    const students = await Student.find(condition).sort({ id: -1}).countDocuments()
    console.log(students)
}

getStudents(query)