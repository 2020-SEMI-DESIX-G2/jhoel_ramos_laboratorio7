
const routes = require('express').Router();
const Estudiantes = require('../models/Estudiantes');

routes.get('/api/estudiantes/', async (req, res) => {
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.json({
        estudiantes,
        cantidad: estudiantes.length
    });
});
routes.post('/api/estudiantes/', async (req, res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.create({ nombre, edad });
    res.json({ nombre, edad });
});
routes.get('/api/estudiantes/:id', async (req, res) => {
    try {
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        res.json({});
    }
});
routes.put('/api/estudiantes/:id', async (req, res) => {

    const { nombre, edad } = req.body;
    try {
        await Estudiantes.findById(req.params.id).updateOne({nombre, edad});
        res.json({ nombre, edad });
    } catch (error) {
        console.log(error);
        res.json({});
    }
});
routes.delete('/api/estudiantes/:id', async (req, res) => {

    const { nombre, edad } = req.body;
    try {
        const estudiante = await Estudiantes.findOneAndDelete(req.params.id);
        res.json({
            "_id": estudiante._id, 
            "nombre": estudiante.nombre,
            "edad": estudiante.edad
        });
    } catch (error) {
        console.log(error);
        res.json({});
    }
});

module.exports = routes;