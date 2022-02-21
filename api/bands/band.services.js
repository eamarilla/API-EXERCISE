const mysqlConnection = require('../../config/connect');

// Modulos de servicios que se utilizan en la API
module.exports = {
    // Servicio para crear una nueva banda de musica
    create: (data, callBack) => {
        mysqlConnection.query(
            // Utilizamos un procedimiento en este servicio para mejor orden
            // le pasamos el name, genre, year para agregar
            'CALL sp_band_add(?, ?, ?);',
            [
                data.name,
                data.genre,
                data.year
            ],
            (error, results, fields) => {
                console.log(error);
                if (error) {
                    console.log(error);
                    return callBack();
                }
                return callBack(null, results);
            }
        );
    },
    // Servicio para obtener todas las bandas de música que se cargaron
    getBands: callBack => {
        mysqlConnection.query(
            `SELECT * FROM bands`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, result);
            } 
        );
    },
    // Servicio para obtener el detalle de una banda en especifica, se le debe enviar el id.
    getBandsById: (id, callBack) => {
        mysqlConnection.query(
            'SELECT * FROM bands WHERE band_id = ?',
            [id],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, result[0]);
            } 
        );
    },
    // Servicio para actualizar una banda de musica, se le pasa json con los datos id, name, genre, year
    updateBands: (data, callBack) => {
        mysqlConnection.query(
            'CALL sp_band_edit(?, ?, ?, ?);',
            [
                data.id,
                data.name,
                data.genre,
                data.year
            ],
            (error, results, fields) => {
                if (error) {
                    console.log(error);
                    return callBack();
                }
                return callBack(null, results.affectedRows);
            }
        );
    },

    // Servicio para eliminar una banda de musica, se le pasa el id de la banda a eliminar
    deleteBand: (id, callBack) => {
        mysqlConnection.query(
          `DELETE FROM bands WHERE band_id = ?`,
          [id],
          (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results.affectedRows);
            }
        );
    }
}