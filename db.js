

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb + srv://Expressty:ExpresstyPassword@expressty-z0jtc.azure.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, dbo) {
    if (err) throw err;
    console.log("Database created!");
    dbo.close();
});

