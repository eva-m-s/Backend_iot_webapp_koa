'use strict'
const r = require('./dash');
const plants = require('./plants');
const plants2 = require('./plants2');
let arr=[];

/*const record =

{
	"datetime": "2021-09-10 12:25:38" ,
	"humidity": 10 ,
	"id": "67664640-83cf-493f-bfee-54f611e39127" ,
	"light": 2 ,
	"soil": 5 ,
	"temperature": 5
	}
	const data =[
	{
        "average": 18.75 ,
        "id": "36699f98-b0ec-443d-a63a-cd94ecc5325b" ,
        "maximum": 20 ,
        "maximumAt": "2021-09-10 12:25:38" ,
        "minimum": 10 ,
        "minimumAt": "2021-09-10 12:12:53" ,
        "parameter": "temperature"
        },
        {
        "average": 0.25 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a1e9" ,
        "maximum": 1 ,
        "maximumAt": "2021-09-09 13:46:37" ,
        "minimum": 0 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "soil"
        },
        {
        "average": 60 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 80 ,
        "maximumAt": "2021-09-09 20:51:37" ,
        "minimum": 54 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "humidity"
        },
        {
        "average": 50 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 95 ,
        "maximumAt": "2021-09-09 12:05:37" ,
        "minimum": 8 ,
        "minimumAt": "2021-09-10 2:25:38" ,
        "parameter": "light"
        }] */

function setup (io){
	
	io.on('connection', (socket) => {
		console.log(`User Connected: ${socket.id}`);
		socket.emit('getPlants',plants);
		r.db('webapp').table('readings')
		.orderBy({index: r.desc('datetime')})
		.limit(1)
	   //.pluck("temperature","humidity","soil","light")
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
		   socket.on('getNewDataStop', stopCursor);
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }
			   socket.removeListener('getNewDataStop',stopCursor);
			   socket.removeListener('disconnect',stopCursor);
		   }
		}
		
		r.db('webapp').table('readings_stats')
		.orderBy({index: r.desc('datetime')})
		.limit(4)
	   //.pluck("temperature","humidity","soil","light")
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
		   socket.on('getNewDataStop', stopCursor);
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }
			   socket.removeListener('getNewDataStop',stopCursor);
			   socket.removeListener('disconnect',stopCursor);
		   }
		}
		
		/*r.db('webapp').table('plants')
		.limit(3)
		.run({cursor:true}, handleChange3);
	   function handleChange3(err,cursor){
		   if(err){
			   console.log(err);
		   }
		   else{
			   if(cursor){
				   cursor.each(function(err,plants){
					   if(err){
						   console.log(err);
					   }
					   else {
						   
						
						   console.log(plants); 
						
						   socket.emit('getPlants2',plants);
						  

					   
					   }
					   
				   });
			   }
		   }
		   socket.on('getNewDataStop', stopCursor);
		   socket.on('disconnect', stopCursor);
		   function stopCursor () {
			   if(cursor){
				   cursor.close();
			   }
			   socket.removeListener('getNewDataStop',stopCursor);
			   socket.removeListener('disconnect',stopCursor);
		   }
		}*/
		
		socket.on('disconnect', () => {
		  console.log(`User Disconnected: ${socket.id}`);
		});
	  });
}	
		

module.exports = {
	setup: setup
};
