// const{Router} = require("express");
// const contacto = new Router ();
// const nodemailer = require("nodemailer");


// contacto.get("/contacto", (req, res) => {
//     res.render("contacto", {
//       subtitulo: "soluciones en calidad e inocuidad de alimentos",
//       titulo: "JM consulting",
//     });
//   });
  
// contacto.post("/enviar-email", (req, res) => {
//     const nombre = req.body.nombre;
//     const apellido = req.body.apellido;
//     const email = req.body.email;
//     const mensaje = req.body.mensaje;
  
//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });
//     let message = {
//       to: "juliamancini80@gmail.com",
//       from: "Remitente",
//       html: `<h1> Mensaje de ${nombre} ${apellido} para nosotros: ${mensaje}, contacto:${email} <h1/>`,
//     };
    
//     transporter.sendMail(message, (error, info) => {
//       if (error) {
//         res.status(500).send(error.message);
//       } else {
//         res.render("enviado");
//         res.status(200).jsonp(reqbody);
//       }
//     });
//   });

// module.exports = contacto; 