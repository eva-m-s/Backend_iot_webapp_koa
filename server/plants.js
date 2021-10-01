'use strict';
const plants=[
	{
	id: 1,
	type: 'Kaktusowate' ,
	species:[
	{
		nr: 11,
		name: 'Opuncja',
		temp: 'hot' ,
		hum: 'medium' ,
		soil: 'dry' ,
		ligh: 'strong' 
	},
	{
		nr: 12,
		name: 'Aloes',
		temp: 'hot' ,
		hum: 'high' ,
		soil: 'dry' ,
		ligh: 'strong' 
	},
	]},
	{
	id: 2,
	type: 'Kwitnące' ,
	species:[
		{
			nr: 14,
			name: 'Storczyk',
			temp: 25 ,
			hum: 'medium' ,
			soil: 'medium' ,
			ligh: 'medium' 
		},
		{
			nr: 15,
			name: 'Skrzydłokwiat',
			temp: 15 ,
			hum: 'low' ,
			soil: 'wet' ,
			ligh: 'low' 
		}
	]},
	{
	  id: 3,
	  type: 'Inny' ,
	  species:[
		  {
			  name: 'Inny',
			  nr: 16,
			  temp: 'medium' ,
			  hum: 'medium' ,
			  soil: 'medium' ,
			  ligh: 'medium' 
		  }
	  ]}
  ] 
module.exports = plants;
