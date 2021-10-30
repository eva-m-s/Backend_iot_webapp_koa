'use strict';
/*const plants=[
	{
	id: 1,
	type: 'Kaktusowate' ,
	species:[
	{
		nr: 11,
		name: 'Opuncja',
		temp: 3 ,
		hum: 2 ,
		soil: 1 ,
		light: 3 
	},
	{
		nr: 12,
		name: 'Aloes',
		temp: 3 ,
		hum: 3 ,
		soil: 0 ,
		light: 3 
	},
	]},
	{
	id: 2,
	type: 'Kwitnące' ,
	species:[
		{
			nr: 14,
			name: 'Storczyk',
			temp: 2 ,
			hum: 2 ,
			soil: 3 ,
			light: 2 
		},
		{
			nr: 15,
			name: 'Skrzydłokwiat',
			temp: 1 ,
			hum: 1 ,
			soil: 2 ,
			light: 2 
		}
	]},
	{
	  id: 3,
	  type: 'Inny' ,
	  species:[
		  {
			  name: 'Inny',
			  nr: 16,
			  temp: [1,3,2] ,
			  hum: [2,2,1] ,
			  soil: [2,1,3],
			  light: [2,3,2] 
		  },
	  ]}
  ] */
const plants=[
{
  id: 1,
  type: 'Inny' ,
  species:[
	  {
		  name: 'Inny',
		  nr: 11,
		  temp: [1,1,1,2] ,
		  hum: [2,2,2,2] ,
		  soil: [2,1,1,0],
		  light: [2,2,3,2] 
	  },
  ]},
{
id: 2,
type: 'Fiołkowate' ,
species:[
{
	nr: 22,
	name: 'Fiołek alpejski',
	temp: 1 ,
	hum: 2 ,
	soil: 1 ,
	light: 2 
},
]},
{
id: 3,
type: 'Pieprzowate' ,
species:[
	{
		nr: 33,
		name: 'Peperomia',
		temp: 2 ,
		hum: 2 ,
		soil: 0 ,
		light: 2 
	},
]},
{
id: 4,
type: 'Wrzosowate' ,
species:[
	{
		nr: 44,
		name: 'Azalia',
		temp: 1 ,
		hum: 2 ,
		soil: 1 ,
		light: 3
	},
]}
]

module.exports = plants;
