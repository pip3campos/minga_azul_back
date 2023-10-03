import Chapter from '../../models/Chapter.js';

const get_me = async (req, res) => {
  try {
    const chapterAuthor = await Chapter.find({ manga_id: req.query.manga_id }); 
    // Busca en bd el manga que coincicda por id con el req.query.manga_id y nos manda todos los capitulos de ese manga (libro)
    console.log('hola', chapterAuthor);

    res.json(chapterAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default get_me;