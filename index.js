let express = require('express'),
    mysql = require('mysql');
let app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "top4ek",
  password: "q2w3e4r5",
  database: "lang_school"
});

con.connect(function(err) {
  con.query("SELECT * FROM schools", function (err, result, fields) {
    console.log('Connect to database is successful');
  });
});

app.get('/get_school', (req, res) => {
  con.query("SELECT * FROM schools", (err, result, fields) => {
    if(err){
      console.log(err);
    }
    var array = []
    for (var i = 0; i < result.length; i++) {
      array.push(result[i])
    }
    res.send(result)
  })
})

app.get('/get_teachers', (req, res) => {
  con.query("SELECT * FROM teachers", (err, result, fields) => {
    if(err){
      console.log(err);
    }
    var array = []
    for (var i = 0; i < result.length; i++) {
      array.push(result[i])
    }
    res.send(result)
  })
})

app.listen(31337, () => {
  console.log('Server listening on port 31337');
})
