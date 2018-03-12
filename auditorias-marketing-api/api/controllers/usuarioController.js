'use strict';
var mongoose = require('mongoose'),
		Usuario = mongoose.model('usuario');

exports.getAll = function(rep,res){

	Usuario.find({},function(error,usuario) {
		console.log('esta aca');
		console.log(usuario);
		if (error) 
			res.send(error);
			res.json(usuario);
		
	});
};

exports.create = function(req,res){

	var new_usuario = new Usuario(req.body);
	new_usuario.save(function(error	, usuario){
			console.log(usuario);
			if (error) 

				res.send(error);
				res.json(Usuario);
			
	});
};

exports.get = function(req,res){
	Usuario.findById(req.params.id, function(error,usuario){
		if (error) 
			res.send(error);
			res.json(usuario);
		
	});
};

exports.update = function(rep,res){
	Usuario.findOneAndUpdate(
		{id: req.params.id},
		req.body,{new : true},
		function(error,usuario){
				if (error) 
					res.send(error);
					res.json(usuario);
				
		});
};

exports.delete = function(req,res){
	Usuario.remove(
		{id:req.params.id},
		function(error,usuario){
			if (error) 
				res.send(error);
				res.json({message: 'the user was successfully delete'})
			
		});
};
