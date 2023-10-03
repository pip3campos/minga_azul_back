import Author from '../models/Author.js';

const findAuthor = async (req, res, next) => {
    try {
        const findedAuthor = await Author.findOne({ user_id: req.user._id})
        if (findedAuthor) {
            req.author=findedAuthor
            return next()
        }
        return res.status(404).json({
            success: false,
            message: "Not Finded Author",
            response: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            response: null
        })

    }

    return next();
  } catch (error) {
    console.error("Error no tiene permiso de author", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default find_id;