
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsuarioSchema = new Schema({

name: {
type: String,
require: 'Kindly enter the name of the usuario'
},
created_date: {
type: Date,
default: Date.now()
},
status: {
type: [{
	type : String,
	enum : ['pending','ongoning','completed']
}],
default: ['pending']
}


});	

module.exports = mongoose.model('usuario', UsuarioSchema);