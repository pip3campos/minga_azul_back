import Chapter from '../../models/Chapter.js';

const destroyChapter = async (req, res) => {
  try {
    const deletedChapter = await Chapter.findOneAndDelete({_id: req.params.id});

    if (!deletedChapter) {
      return res.status(404).json({ message: 'Capítulo no encontrado' });
    }else{
      res.status(200).json({ message: 'Capítulo eliminado con éxito', deletedChapter })
    }

  } catch (error) {
    console.error('Error al eliminar el capítulo:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export default destroyChapter;