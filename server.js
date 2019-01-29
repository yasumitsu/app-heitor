const express = require("express");
const bodyParser = require("body-parser")

const netstat = require('node-netstat');
// netstat({
//     command: {
//         cmd: 'netstat',
//         args: ['-ano|findstr:3000', '--udp']
//     }
// }, function (data) {
//     console.log(data)
// })

// netstat({
//     filter: {
//         local:{port: 3000},
//         state: 'LISTENING'
//     },
//     limit: 5
// }, function (data) {
//     console.log(data)
//     // a single line of data read from netstat
// });

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'softpharma',
  password : 'NwSoftPs1843',
  database : 'softpharma'
});

connection.connect()

connection.query('SELECT * from cadcli', function (err, rows, fields) {
  if (err) throw err
  
  console.log('The solution is: ', rows[0])
})

connection.end()



const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/inicio", function(req, res){
  inicio = Date.now()
  console.log(req.body.start);
  res.send("iniciado")
})

app.post("/fim", function(req, res){
  final = Date.now()
  console.log(final - inicio);
  result = final - inicio
  res.send("finalizado em: " + result)
})

app.listen(3000);
