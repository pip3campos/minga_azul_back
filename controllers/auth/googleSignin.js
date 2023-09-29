import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Configuración de OAuth2
const CLIENT_ID = process.env.ID_CLIENT;
const client = new OAuth2Client(CLIENT_ID);

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.secretclient
  },
});

export default async (req, res, next) => {
  try {
    // Obtenemos el token de Google
    const token = req.body.token;

    // Verificamos el token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: ID_CLIENT,
    });

    // Obtenemos los datos del usuario
    const { email, picture } = ticket.getPayload();

    // Creamos el token JWT
    const tokenJwt = jwt.sign(
      { email: email },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 }
    );

    // Buscamos el usuario en la base de datos
    let user = await User.findOneAndUpdate({ email: email }, { online: true }, { new: true });

    // Si no existe, lo creamos y mandamos mail de verificación
    if (!user) {
      user = await User.create({
        email: email,
        password: null,
        photo: picture,
        role: 4,
        verify_code: crypto.randomBytes(10).toString('hex'),
      });

      // Construye la URL de verificación de correo
      const verificationLink = `http://localhost:5173/auth/verify?code=${user.verify_code}`;

      // Envía el correo de verificación
      try {
        await transporter.sendMail({
          from: '"Verificación de correo" <mingamangasss@gmail.com>',
          to: user.email,
          subject: "Verifica tu correo electrónico",
          html: `<p>para verificar su correo electronico, haga click en el siguiente enlace:</p>
               <a href="${verificationLink}">${verificationLink}</a>`,
        });
      } catch (error) {
        console.error("Error al enviar el correo de verificación:", error);
      }
    }

    const userData = {
      email: user.email,
      photo: user.photo,
      role: user.role,
      author: null,
      is_verified: user.verified,
    };

    // Si el usuario no está verificado, no le permitimos iniciar sesión
    if (!user.verified) {
      return res.status(401).json({
          message: 'User not verified',
          success: false
      });
  }

    return res.status(200).json({
      response: { token: tokenJwt, user: userData },
      message: 'User signed in with token',
      success: true
    });

  } catch (error) {
    next(error);
  }
};
