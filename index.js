//Vamos a crear un servidor   primero creamos el  archivo IDEX JSi
const http = require('http');   // importamos la librerias de  interaccion  con http
http.createserver(function(req,res){  //
    res.write("<h1>hola mundo</h1>"); 
    }).listen(3000);


// otra  caracteristia de node js es   el administrador de paquetes NPM  este permite instalar librerias  para el desarrollo de una apliacion 
//verificar la carpeta del  servidor  por la consola del IDE 
// en consola usar el comando  
//npm install paquete?
