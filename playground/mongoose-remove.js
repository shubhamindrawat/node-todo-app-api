const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log('Removed Todos: ', result);
// });

// Todo.findOneAndRemove({_id: '5ebff78fb413703f60744eb1'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5ebff78fb413703f60744eb1').then((todo) => {
//     console.log(todo);
// });