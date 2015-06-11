var findLargest= function(array){

var largest=array[i];
for(var i=0; i<= array.length-1; i++  ){
    if(largest> array[i]){
    largest= largest;}
    else{
        largest= array[i];
    }
   
}
 console.log(largest);
return largest;

};
var arr=[200, 30, 40];
findLargest(arr);