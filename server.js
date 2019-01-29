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

netstat({
    filter: {
        local:{port: 3000},
        state: 'LISTENING'
    },
    limit: 5
}, function (data) {
    console.log(data)
    // a single line of data read from netstat
});


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
