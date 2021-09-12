const request = require('request');

const data1 = [
  {
    "data": "2021-12-04",
    "name": "start4",
    "quantity": "10",
    "distance": "100"
  },
  {
    "data": "2021-15-05",
    "name": "start15",
    "quantity": "200",
    "distance": "400"
  },
  {
    "data": "2021-05-06",
    "name": "start21",
    "quantity": "150",
    "distance": "120"
  },
  {
    "data": "2021-10-03",
    "name": "start13",
    "quantity": "20",
    "distance": "500"
  }
]
const data = {
    "data": "2021-12-04",
    "name": "start4",
    "quantity": "10",
    "distance": "100"
  }

request.post({
  url: 'http://localhost:3001/',
  body: data,
  json: true,
}, function (error, response, body) {
  console.log(body);
});