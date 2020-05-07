// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error){
        return console.log('Failed to establish a connection with MongoDB Server');
    }
    console.log('Established a connection to MongoDB Server');

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert Todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Shubham',
    //     age: 23,
    //     llocation: 'Surat'
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Something went wrong', error);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // });

    client.close();
});