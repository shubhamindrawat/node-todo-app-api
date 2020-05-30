const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const todos = [{
    _id: new ObjectID(),
    text: 'First test Todo',
    _creator: userOneId
},{
    _id: new ObjectID(),
    text: 'Second test Todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const users = [{
    _id: userOneId,
    email: 'shubhamindrawat@gmail.com',
    password: 'userPassOne',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userOneId,
            access: 'auth'
        }, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoId,
    email: 'shubhamj@gmail.com',
    password: 'userPassTwo',
    tokens: [{
        access: 'auth',
        token: jwt.sign({
            _id: userTwoId,
            access: 'auth'
        }, process.env.JWT_SECRET).toString()
    }]
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