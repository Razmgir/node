
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Expressty:ExpresstyPassword@expressty-z0jtc.azure.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("firsty");
    var myquery = { fname: "Rahim" };
    var newvalues = { $unset: { age: "" } };
    dbo.collection("users").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("document updated");
        db.close();
    });
});