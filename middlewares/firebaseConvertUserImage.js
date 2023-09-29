import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {v4} from 'uuid'


export default async function uploadFile(req,res,next) {
    const firebaseConfig = {
        apiKey: "AIzaSyAUCCedEzQLL8N1Tk9tGyaahSf9EaeLoyU",
        authDomain: "reactfirebaseminga-1af1f.firebaseapp.com",
        projectId: "reactfirebaseminga-1af1f",
        storageBucket: "reactfirebaseminga-1af1f.appspot.com",
        messagingSenderId: "572491268522",
        appId: "1:572491268522:web:e5f60ad3a3d9b1de0febd3"
      };
    const app = initializeApp(firebaseConfig);
    const storage=getStorage(app)
    const storageRef=ref(storage,`userImage/${v4()}`)
    try {
        if (req.files==undefined) {
            return res.json({
                success:false,
                message:'Se necesita el envio de una imagen para el registro'
            })
        }
        const metadata={
            contentType:req.files.file.mimetype,
            size: req.files.file.size
        }
        console.log(req.files);
        const archivo=req.files.file.data
        await uploadBytes(storageRef,archivo,metadata)
        const url= await getDownloadURL(storageRef)
        req.body.photo=url
        return next()
       
    } catch (error) {
        return error
    }
    
}
