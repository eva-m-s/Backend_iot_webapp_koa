'use strict'
const r = require('./dash');
const plants = require('./plants');
let arr

function setup (io){
	r.db('webapp').table('ref_values')
			.insert({
				refSoil: ''
			})
			.run();
			
	io.on('connection', (socket) => {
		console.log(`User Connected: ${socket.id}`);
		
		socket.on('getRef', (refSoil) => {
			r.db('webapp').table('ref_values')
			.update({
				refSoil: refSoil,
			})
			.run();
			})
		socket.emit('getPlants',plants);
		socket.emit('getDays',5);
		r.db('webapp').table('readings')
		.orderBy({index: r.desc('datetime')})
		.limit(1)
	   .changes({includeInitial:true})("new_val")
	   .run({cursor:true}, handleChange);
	   function handleChange(err,cursor){
		   if(err){
			   console.log(err);
		   }
		   else{
			   if(cursor){
				   cursor.each(function(err,record){
					   if(err){
						   console.log(err);
					   }
					   else{
						   //console.log(record); 
						   socket.emit('getRecord',record);
					   }
				   });
			   }
		   }
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }
			   socket.removeListener('disconnect',stopCursor);
		   }
		}
		
		r.db('webapp').table('readings_stats')
		.orderBy({index: r.desc('datetime')})
		.limit(4)
	   .changes({includeInitial:true})("new_val")
	   .run({cursor:true}, handleChange2);
	   function handleChange2(err,cursor){
		   if(err){
			   console.log(err);
		   }
		   else{
			   if(cursor){
				   cursor.each(function(err,data){
					   if(err){
						   console.log(err);
					   }
					   else {
						   console.log(data); 
						   socket.emit('getData',data);
					   }
					   
				   });
			   }
		   }
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }
			   socket.removeListener('getNewDataStop',stopCursor);
			   socket.removeListener('disconnect',stopCursor);
		   }
		}
		
		socket.on('disconnect', () => {
		  console.log(`User Disconnected: ${socket.id}`);
		});
	  });
}	
		

module.exports = {
	setup: setup
};
