'use strict';
module.exports = function(app) {
var usuario = require('../controllers/usuarioController');;

app.route('/usuario')
		.get(usuario.getAll)
		.post(usuario.create);
app.route('/usuario/:id')
		.get(usuario.get)
		.put(usuario.update)
		.delete(usuario.delete);

}