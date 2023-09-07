import Author from '../../models/Author.js'
import User from '../../models/User.js'



        async function getOne (req, res, next) { 
            const { id } = req.params;
            let profile =[]
            let user = await User.findById({_id:id});
            if(user){
                try {
            
                    let doc =  await Author.findOne({user_id: id}) 
                    console.log(doc)
                    profile.push(user, doc)
                    if(doc){
                        res.json({
                            success: true,
                            response: {
                             profile: {
                                userEmail: user.email,
                                userPassword: user.password,
                                userPhoto: user.photo,
                                UserRole: user.role,
                                userOnline: user.online,
                                userVerified: user.verified,
                                userVerify_code: user.verify_code,
                                userHasAuthor:true,
                                authorName: doc.name,
                                authorLast_name: doc.last_name,
                                authorCity: doc.city,
                                authorCountry: doc.country,
                                authorDate: doc.createdAt,
                                authorPhoto: doc.photo,
                                authorUser_id: doc._id,
                                authorActive: doc.active
                             }
                            }
                        })
                    } else{
                        res.json({
                            success: true,
                            response: {
                             profile: {
                                userEmail: user.email,
                                userPassword: user.password,
                                userPhoto: user.photo,
                                UserRole: user.role,
                                userOnline: user.online,
                                userVerified: user.verified,
                                userVerify_code: user.verify_code,
                                userHasAuthor:false
                             }
                            }
                        })
                    }
                    //if(doc){
                        
                    //} else{
                    //    res.json({
                    //        success: true,
                    //        response: {
                    //         profile: 
                    //        }
                    //    })
                    //}
                     
                   } catch (error) {
                       console.log(error)
                       return res.status(500).json({
                           success: false,
                           response: null
                       })
                   }  
            }
          
         
        
        
        }
        
  export default getOne