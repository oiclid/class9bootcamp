// var newArray=[];
// var cel=[];
// var convFarenheight = function(cel){
    
//     result= ((9/5)*cel)+32;
        
    
//     return result;
// };
// var temp=[20, 30, 40, 50, 60];
// for (var i=0; i<=temp.length-1; i++){
    
// newArray.push(convFarenheight(temp[i]));}

// console.log(newArray);
// var fhTemp = function(temp)
// {
// 	for (var i=0; i<=temp.length-1; i++){
    
// newArray.push(convFarenheight(temp[i]));}

// console.log(newArray);
// return newArray
// }
// var newArray=[];

// var convFarenheight = function(cel){
//     var cel=[];
//     result= ((9/5)*cel)+32;
//     for (var i=0; i<=cel.length-1; i++){
//     var temp=[];
// newArray.push(convFarenheight(temp[i]));}

// console.log(newArray);
// return newArray;
// };

// var temp2 =[50, 60, 20];

// convFarenheight(temp2);
function convertCelsius(arrayNew){
         var newArray =[];
         for(var i=0; i < arrayNew.length; i++) {
         var f = (9/5) * arrayNew[i] + 32;
         newArray.push(f +" "+ "F");
            }
         return newArray;
    }
convertCelsius([10, 15, 22]);