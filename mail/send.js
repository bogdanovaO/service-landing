// import express from 'express'
// import nodemailer from 'nodemailer'
// const app = express()
// app.use(express.json())

// app.post('/', () => {
  
  // router.post("/", (req, res) => {
    // if (req.body.email && req.headers.referer) {
    //   email = req.body.email;
    //   url = req.headers.referer;
  
      // sendMail();
      // res.status(200).json("Сообщение отправлено");
    // } else {
    //   res.status(500).json({ message: "Не хватает данных для отправки почты" });
    // }
  // });

  // const sendMail = () => {

  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     service: 'Gmail',
  //     secure: true,
  //     auth: {
  //     user: 'bettercallnik@gmail.com',
  //     pass: 'Zhopapopa229'
  //     }
  //   });

  //   transporter.sendMail({
  //     from: 'bettercallnik@gmail.com',
  //     to: email,
  //     subject: "Ссылка на аудит free-audit.ru",
  //     text: this.phone,
  //   });
  // };
// export default {
//   path: '/mail/send',
//   handler: app
// }