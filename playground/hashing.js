const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '12344321';

// bcrypt.genSalt(10, (error, salt) => {
//     bcrypt.hash(password, salt, (error, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$2IrwUrOWCC2jFuzqBr1iJuG7gbbCVpuL6JUoXRE6ieOpEYC5QHqhO';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'A1B2C3D4');
// console.log(token);

// var decoded = jwt.verify(token, 'A1B2C3D4');
// console.log('Decoded: ', decoded);