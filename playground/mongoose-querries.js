const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5eb8568590990250100984a31';

// if(!ObjectID.isValid(id)){
//     console.log('Invalid ID');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todoByID) => {
//     if(!todoByID){
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todoByID);
// }).catch((e) => console.log(e));

var id= '';

// User.find().then((users) => {
//     console.log('Users: ', users);
// });
User.findById('5eb44c047d8b7d76ff54edfc').then((user) => {
    console.log('User: ', user);
});