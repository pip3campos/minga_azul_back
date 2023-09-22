import Author from '../models/Author.js';

const find_id = async (req, res, next) => {
  try {
    const author = await Author.findOne({ user_id: req.user._id });

    if (author) {
      req.author = author;
    }

    return next();
  } catch (error) {
    console.error("Error no tiene permiso de author", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default find_id;