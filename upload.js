

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/node/files/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                var fname = fields.fn;
                var lname = fields.ln;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('Your first name is ' + fname + ' and your last name is ' + lname + "<br>");
                res.end("<br>file uploaded ");
            });  
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype = "multipart/form-data" > ');
        res.write('<input type="file" name="filetoupload"><br>'); 
        res.write('<input type="text" placeholder="first name" name="fn"><br>');
        res.write('<input type="text" placeholder="last name" name="ln"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
console.log('connected');