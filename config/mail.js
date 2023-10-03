
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'juanaysencorral@gmail.com',
      pass: process.env.PASSWORD
    }
  });

  transporter.verify().then(()=>{
    console.log('Ready for send emails')
  });















/* 
import nodemailer from "nodemailer"


const mail={
    user : "smtp.ethereal.email",
    pass : "cWHwmwDcnUh5wKXa24"
}


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    tls:{
rejectUnauthorized:false
    },
    secure: true,
    auth: {
        user: mail.user,
        pass: mail.pass,
    }
  });

  const Sendemail = async (email,subjet,html) =>{
    
    console.log(email)
    try {
        await transporter.sendMail({
            from: `MHcode <${mail.user}>`, // sender address
            to: email, // list of receivers
            subjet, // Subject line
            text: "nose" ,// plain text body
             html ,// html body
          });
          
    } catch (error) {
        
    }

  } 

  

  
  export default Sendemail*/