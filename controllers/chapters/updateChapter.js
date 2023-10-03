import Chapter from '../../models/Chapter.js';

const updateChapter = async (req, res) => {
    const { id } = req.params;
  try {
      
    // Buscar el capítulo por su ID
    const chapter = await Chapter.findOneAndUpdate(
      {_id:id}, 
      req.body,
      //{new : true} //Me devuelve el modificado si lo comento me devuelve el anterior
      )

    if (!chapter) {
      return res.status(404).json({ error: 'Capítulo no encontrado' });
    }
    return res.status(200).json({ message: chapter });
  } catch (error) {
    console.error('Error al actualizar el capítulo:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default updateChapter;