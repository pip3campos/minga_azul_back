
import User from '../../models/User.js';

import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Configuracion de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
});

async function create(req, res, next) {
  
  // Extrae los datos de req.body
  let {
    email,
    password,
    photo,
    role
  } = req.body


  try {
    // Crea el usuario en la base de datos
    const newUser = await User.create({
      email,
      password,
      photo,
      role,
      verify_code: crypto.randomBytes(10).toString('hex')
    })

    // Construye la URL de verificación de correo
    const verificationLink = `http://localhost:4000/auth/verify/${newUser.verify_code}`;
    console.log("register:",verificationLink)

    // Envía el correo de verificación
    try {
      await transporter.sendMail({
        from: '"Verificación de correo" <juanaysencorral@gmail.com>',
        to: newUser.email,
        subject: "Verifica tu correo electrónico",
        html: `<p>Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico:</p>
             <a href="${verificationLink}">${verificationLink}</a>`,
      });
    } catch (error) {
      console.error("Error al enviar el correo de verificación:", error);
    }

    res.json({
      response: newUser,
      message: 'User created successfully'
    });
  } catch (error) {
    console.log(error)
  }
}



export default create;











/* import User from '../../models/User.js'
import  Sendemail from '../../config/mail.js'
export default async function register(req,res,next) {
  const GetTemplate = (verify_code ) =>{
    return `
   <div clasName:"flex flex-col justify-center items-center">
   <h2> hola nuevo usuario </h2>
   <p>debes confirmar tu cuenta, click en el siguiente enlase </p>
   <Link to={"/localhost:4000/api/auth/verify/:${verify_code}"}/>
   </div>
   
   `;
 }
  try {
    const newUser = new User(req.body)
     


     
   const Template = GetTemplate(newUser.verify_code)
   Sendemail(newUser.email,"esto es un mail de confirmacion", Template)
   await newUser.save(newUser)
      
    return res.status(200).json({
        success:true,
        response: newUser,
        message:"User created"
    })
    
  } catch (error) {
    next(error);
  } 
}*/