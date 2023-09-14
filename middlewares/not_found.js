const Not_Found = ( req, res, next) => {
    res.status(404).send('Ruta no encontrada');
}

export default Not_Found