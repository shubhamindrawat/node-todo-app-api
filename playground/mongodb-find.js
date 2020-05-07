// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (error, client) => {
    if(error){
        return console.log('Failed to establish a connection with MongoDB Server');
    }
    console.log('Established a connection to MongoDB Server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5eb318daa9edcd09fcbe24c1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // });
    db.collection('Users').find({location: 'Surat'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    });

    client.close();
});