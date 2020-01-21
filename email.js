
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    service: 'gmail',
    auth: {
        user: 'test.razmgir@gmail.com',
        pass: 'password'
    }
});
var mailOptions = {
    from: 'test.razmgir@gmail.com',
    to: 'razmgir.rahim@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});