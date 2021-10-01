'use strict'
const r = require('./dash');
let plants2;

r.db('webapp').table('plants')
		.limit(3)
		.run({cursor:true}, handleChange3);
	   function handleChange3(err,cursor){
		   if(err){
			   console.log(err);
		   }
		   else{
			   if(cursor){
				   cursor.each(function(err,plants2){
					   if(err){
						   console.log(err);
					   }
					   else {
						   
						
						   console.log(plants2); 
						
						    return plants2;
						  

					   
					   }
					   
				   });
			   }
		   }
		  
		}
module.exports = plants2;
