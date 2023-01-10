// var _ = require('lodash')
import _ from 'lodash';

const data = [
  {
    userName: 'Joaquin',
    role: 'admin'
  },
  {
    userName: 'Joaquina',
    role: 'seller'
  },
  {
    userName: 'Joaquine',
    role: 'narcotraficante'
  },
  {
    userName: 'Joaquino',
    role: 'seller'
  },
];
let hex = 0xfff
const rta = _.groupBy(data, (item) => item.role);
// console.log(rta)

const rtas = 1 + '1'
console.log(hex)
