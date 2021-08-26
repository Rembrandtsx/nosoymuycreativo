const nodemailer = require("nodemailer");


async function main() {
    
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
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
  }
  main().catch(console.error);