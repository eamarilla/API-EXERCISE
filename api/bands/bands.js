const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../config/connect');

// Listado de los grupos de música.
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM bands', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Detalle de un grupo de música.
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM bands WHERE band_id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
    console.log(id);
});

// Agregamos un nuevo grupo de música, preparamos un procedimiento para dicho evento.
router.post('/', (req, res) => {
    const { id, name, genre, year } = req.body;
    const query = 'CALL sp_band_add(?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, genre, year], (err, rows, fields) => {
        if (res.statusCode == 200) {
            res.json({Status: 'Band add successful'});
        } else {
            console.log(err);
        }
    });
});

// Editamos un grupo de música, preparamos un procedimiento para dicho evento.
router.put('/:id', (req, res) => {
    const { name, genre, year } = req.body;
    const { id } = req.params;
    const query = 'CALL sp_band_edit(?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, genre, year], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Band update successful'});
        } else {
            console.log(err);
        }
    });
});

// Eliminamos un grupo de música.
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM bands WHERE band_id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Band delete successful'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;