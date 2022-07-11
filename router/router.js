const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = new Router();
const mysql = require('mysql');

//-----------conexion a base de datos-----

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'jm',
})
conn.connect((err)=>{
  if(err) throw err;
  console.log ('CONEXION ESTABLECIDA')
})

//-------------SELECT
router.get("/clientes", (req, res) => {
  let sql = "SELECT * FROM clientes";
  let query = conn.query (sql, (err, results)=>
  {
    if(err) throw err;
  res.render (('clientes'), {
    results : results,
  })  
})
  });


// // //-------------INSERT 
router.post('/save', (req, res) => {
    let data = {cliente_nombre: req.body.cliente_nombre, cliente_empresa: req.body.cliente_empresa, cliente_email: req.body.cliente_email, cliente_servicio: req.body.cliente_servicio, precio: req.body.precio};
    let sql = "INSERT INTO clientes SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/clientes');
    });
  });

//--------------------UPDATE----no funciona
router.post('/update', (req, res) => {
  let sql = "UPDATE clientes SET cliente_nombre = '" + req.body.cliente_nombre + "'cliente_empresa = '" + req.body.cliente_empresa + "'cliente_email = '" + req.body.cliente_email + "'cliente_servicio = '" + req.body.cliente_servicio + "'precio = '" + req.body.precio + "'WHERE cliente_id =" + req.body.cliente_id;
  let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/clientes');
  });
});


//--------------------DELETE ----no funciona
router.post('/delete', (req, res) => {
  let sql = 'DELETE from clientes WHERE cliente_id =' + req.body.cliente_id;
  let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/clientes');
  });
});





//---------------Rutas----
router.get("/", (req, res) => {
  res.render("index", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});

router.get("/auditorias", (req, res) => {
  res.render("auditorias", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});

router.get("/capacitaciones", (req, res) => {
  res.render("capacitaciones", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});

router.get("/consultoria", (req, res) => {
  res.render("consultoria", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});

router.get('/clientes', (req,res) => {
  res.render ("consultoria", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});




//------Envio de mails--Esto deberia ir en contacto.js pero no me funciona------/
router.get("/contacto", (req, res) => {
  res.render("contacto", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});

router.post("/enviar-email", (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const mensaje = req.body.mensaje;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  let message = {
    to: "juliamancini80@gmail.com",
    from: "Remitente",
    html: `<h1> Mensaje de ${nombre} ${apellido} para nosotros: ${mensaje}, contacto:${email} <h1/>`,
  };
  
  transporter.sendMail( message, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.render("enviado");
      res.status(200).jsonp(reqbody);
    }
  });
});



router.get("*", (req, res) => {
  res.render("404", {
    subtitulo: "soluciones en calidad e inocuidad de alimentos",
    titulo: "JM consulting",
  });
});


module.exports = router;
