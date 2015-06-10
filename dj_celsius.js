var convertmanyfahrenheit = function (celsius) {

var y= [];

var size = celsius.length;
for (var i = 0; i < size; i++) {
    var fahrenheit = (9/5) * celsius[i] + 32;

    
  y. push(fahrenheit);
}

 return y;
};
var celsius = [12,160,-89,25,111];

console.log(convertmanyfahrenheit(celsius));