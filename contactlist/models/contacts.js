var express=require('express');
const mongoose=require('mongoose');
const ContactsSchemas=mongoose.Schema({
    first_name:{
        type: String,
        
    },
    last_name:{
        type: String, 
    },

    phone:{
        type: String,   
    }
},{ versionKey: '_somethingElse' });
 ContactsSchemas.path('phone').validate(function(value){

 },"some error here");

const Contact=module.exports=mongoose.model('Contact',ContactsSchemas);