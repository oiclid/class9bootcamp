var newArray=[];
var cel=[];
var convFarenheight = function(cel){
    
    result= ((9/5)*cel)+32;
        
    
    return result;
};
var temp=[20, 30, 40, 50, 60];
for (var i=0; i<=temp.length-1; i++){
    
newArray.push(convFarenheight(temp[i]));}

console.log(newArray);