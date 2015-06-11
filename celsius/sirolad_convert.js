/*Andela BootCamp 9 
Course: JavaScript Practice
Programmed By: Sirolad
Email:sirolad@gmail.com
github id:sirolad
Date: June 2015
*/

//This code converts celsius to faraheint
var cel = [];
function convert(cel){
    var ray =[];
    for(var p = 0; p <cel.length; p++){
        var far = (9/5)*cel[p] + 32;
        ray.push(far + "F");
    }
    console.log(ray);
} 
convert([9,5,6]);