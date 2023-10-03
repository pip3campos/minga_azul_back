import Manga from '../../models/Manga.js'

export default async(req,res) => {
    try {
       let {id} = req.params
       let respuesta = {}
        let allMangas = await Manga.find({author_id: id})
        
        let mangasOrdenadas = allMangas.sort((a, b) =>  new Date(a) - new Date(b))

  
  
        if (mangasOrdenadas.length < 4){
                respuesta = {success: true,
                message: "authors",
                response: {
                    mangas: allMangas
                } }
                
        } else if (mangasOrdenadas.length >= 4 && mangasOrdenadas.length < 8){
            let primerasDos = mangasOrdenadas.slice(0,2)
            let ultimasDos= mangasOrdenadas.slice(-2)
            let array=primerasDos.concat(ultimasDos)
            respuesta={success: true,
                message: "authors",
                response: {
                    all: array
                } }
        } else if(mangasOrdenadas.length >= 8){
            let primerasCuatro = mangasOrdenadas.slice(0,4)
            let ultimasCuatro= mangasOrdenadas.slice(-4)
            respuesta={success: true,
                message: "authors",
                response: {
                    new: ultimasCuatro,
                    old: primerasCuatro
                } }
        }
        console.log(respuesta)
        res.json({
            respuesta
        })
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}