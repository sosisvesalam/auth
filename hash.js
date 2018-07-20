const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');


// bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if (err) return next(err);
//         console.log(hash);
//     })
// })

/////////////////////////

// const secret = 'mysecretpassword';
// const secretSalt = 'asdasdasdadas';


// const user = {
//     user: 1,
//     token: MD5('DSFSDFSDFDSFSD').toString() + secretSalt
// }

// const receivedToken = '9b29454d180f03824a0b6e088a9c2345asdasdasdadas'
// if(receivedToken === user.token) {
//     console.log('move forward')
// }
// console.log(user);

/////////////////////////

// const id = '1000';
// const secret = 'supersecret';

// const receivedToken = '9b29454d180f03824a0b6e088a9c2345asdasdasdadas'

// const token = jwt.sign(id, secret);
// // const decodeToken = jwt.verify(receivedToken, secret);

// console.log(token)