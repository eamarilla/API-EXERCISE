const { create, getBands, getBandsById, updateBands, deleteBand } = require('./band.services');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

// Modulos de servicios que se utilizan en la API
module.exports = {
    // Controlador para crear una nueva banda de musica
    createBand: (req, res) => {
        const body = req.body;        
        create(body, (err, results) => {
            console.log(err);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    code: 500,
                    message: 'Error database connection'
                });
            }
            return res.status(200).json({
                code: 200,
                message: 'Band add successfuly'
            });
        });
    },
    // Controlador para ir al detalle de una banda, por el id
    getBandsById: (req, res) => {
        const id = req.params.id;
        getBandsById(id, (err, results) => {
            if (err) {
                res.status(500);
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    code: 404,
                    message: 'Record not found'
                })
            }
            return res.status(200).json({
                code: 200,
                data: results
            })
        });
    },
    // Controlador para ir a todas las bandas
    getBands: (req, res) => {
        getBands((err, results) => {
            if (err) {
                res.status(500);
                console.log(err);
                return;
            }
            return res.status(200).json({
                code: 200,
                data: results
            })
        })
    },
    // Controlador para ir actualizar una banda por el id, datos en json
    updateBands: (req, res) => {
        const body = req.body;
        updateBands(body, (err, results) => {
            if (err) {
                res.status(500);
                console.log(err);
                return;
            }

            if(results){
                return res.status(200).json({
                    code: 200,
                    message: "updated successfully"
                });
            }else{
                return res.status(404).json({
                    code: 404,
                    message: "Record not found"
                });
            }
            
        });
    },
    // Controlador para eliminar una banda, por el id
    deleteBand: (req, res) => {
        const id = req.params.id;
        deleteBand(id, (err, results) => {
            if (err) {
                res.status(500);
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    code: 404,
                    message: 'Record not found'
                });
            }
            return res.status(200).json({
                code: 200,
                message: "Band deleted successfully"
            });
        });
    }
}