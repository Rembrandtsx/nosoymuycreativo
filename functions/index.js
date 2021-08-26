const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require('cors')({origin: true});

let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "iam@camilosalinas.me", // generated ethereal user
      pass: "Acamica1234", // generated ethereal password
    },
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.enviarEmail = functions.https.onRequest(async (request, response) => {
    let email = JSON.parse(request.body).email
    functions.logger.info(email, {structuredData: true});

    await main(email)
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Headers', '*');
    
  response.send({email});
});




async function main(email) {
    
    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "iam@camilosalinas.me", // generated ethereal user
          pass: "Acamica1234", // generated ethereal password
        },
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <iam@camilosalinas.me>', // sender address
        to: "c.salinas@residia.co", // list of receivers
        subject: "Nuevo Lead /Registro en nuestra web", // Subject line
        text: email, // plain text body
        html: email, // html body
      });
  }