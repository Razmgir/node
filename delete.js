var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Expressty:ExpresstyPassword@expressty-z0jtc.azure.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("firsty");
    var myquery = { fname:"Jax"};
    dbo.collection("users").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log("deleted");
        db.close();
    });
});

