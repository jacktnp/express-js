const express = require('express');
const app = express();
app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

const students = [
    { id: 1, name: "Suphakit"},
    { id: 2, name: "Thanapon"},
]

app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/api/student', function(req, res){
    res.send(students);
})

app.get('/api/student/:id', function(req, res){
    const id = req.params.id;
    if(id == 1){
        res.send(students[0])
    }
    else if(id == 2){
        res.send(students[1])
    }
    else{
        res.send('Error 404 not found.')
    }
})

app.get('/api/:school/:id', function(req, res){
    const data = req.params;
    if(data){
        res.send(data)
    }
    else{
        res.send('not found')
    }
})

app.put('/api/update/:id', function(req, res){
    const id = req.params.id;
    const name = req.body.name;
    if(name.length <= 2 || isNaN(id)){
        res.status(400)
    } else {
        const student = students.find(i  => i.id === parseInt(id));
        if(student) {
            student.name = name;
            res.send(students)
        }
        else {
            res.status(400).send('cannot find id')
        }
    }
})

app.post('/api/add', function(req, res){
    const studentName = req.body.name;
    if(studentName.length <= 2){
        res.status(400).send('Error can not add student.')
    } else {
        const student = {
            id : students.length + 1,
            'name': studentName
        }
        students.push(student);
        res.send(student)
    }
})

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('listen port', port);
})