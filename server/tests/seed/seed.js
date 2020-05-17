const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const todos = [{
    _id: new ObjectID(),
    text: 'First test Todo'
},{
    _id: new ObjectID(),
    text: 'Second test Todo',
    completed: true,
    completedAt: 333
}];

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'shubhamindrawat@gmail.com',
    password: 'userPassOne',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: i=userOneId,
            access: 'auth'
        }, 'A1B2C3D4').toString()
    }]
}, {
    _id: userTwoId,
    email: 'shubhamj@gmail.com',
    password: 'userPassTwo'
}
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        Promise.all([userOne, userTwo]);
    }).then(() => done());;
}


module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};