import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import password from "../../middlewares/password.js";

// Configuración de OAuth2
const CLIENT_ID = process.env.ID_CLIENT;
const client = new OAuth2Client(CLIENT_ID);

// Configuración de Nodemailer
/*const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: "mingamangasss@gmail.com",
    pass: process.env.PASSWORD
  },
});*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });
  console.log("llega aca")


export default async (req, res, next) => {
    console.log(req.body.token)
  try {
    // Obtenemos el token de Google
    
    const token = req.body.token;

    // Verificamos el token
   const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.ID_CLIENT,
    });
    console.log("ticket1", ticket)
    if (!ticket) {
        console.log("ticket")
        return res.status(401).json({ message: "Token no válido", success: false });
      }

    // Obtenemos los datos del usuario
    const { email, picture } = ticket.getPayload();
    console.log("payload")

    // Creamos el token JWT
    const tokenJwt = jwt.sign(
      { email: email },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 }
    );
    

    // Buscamos el usuario en la base de datos
    const filter = { email: email };
let update =  crypto.randomBytes(10).toString('hex')
    let user = await User.findOneAndUpdate({ email: email }, {$set:{verify_code:update} }, { new: true },
        );
    
    /*user={
        email: user.email,
        password: user.password,
        photo : user.photo,
        role: user.role,
        verify_code: crypto.randomBytes(10).toString('hex')
    }*/
    //user.verify_code = crypto.randomBytes(10).toString('hex')
    console.log("user existe: ", user)
    
    // Si no existe, lo creamos y mandamos mail de verificación
    if (!user) {
        console.log("user no existe")
      user = await User.create({
        email: email,
        password: null,
        photo: picture,
        role: 4,
        verify_code: crypto.randomBytes(10).toString('hex')
      });  }
      


      // Construye la URL de verificación de correo
      const verificationLink = `http://localhost:4000/auth/verify/${user.verify_code}`;
      console.log("verificationlink: ", verificationLink)
      // Envía el correo de verificación
      try {
        await transporter.sendMail({
          from: '"Verificación de correo" <juanaysencorral@gmail.com>',
          to: user.email,
          subject: "Verifica tu correo electrónico",
          html: `<p>para verificar su correo electronico, haga click en el siguiente enlace:</p>
               <a href="${verificationLink}">${verificationLink}</a>`,
        });
      } catch (error) {
        console.error("Error al enviar el correo de verificación:", error);
      }
    

    const userData = {
      email: user.email,
      photo: user.photo,
      role: user.role,
      author: null,
      is_verified: user.verified,
    };

    // Si el usuario no está verificado, no le permitimos iniciar sesión
    /*if (!user.verified) {
      return res.status(401).json({
          message: 'User not verified',
          success: false
      });
  }
*/
    return res.status(200).json({
      response: { token: tokenJwt, user: userData },
      message: 'User signed in with token',
      success: true
    });

  } catch (error) {
    next(error);
  }
};
