var convertToFahr = function(cels) {
    var fahrenheit = (9/5)*cels + 32;
    return fahrenheit;
};
var celsius = [0,35,45,100];
var fahrenheit = [];
for (var i=0;i<celsius.length;i++) {
    fahrenheit.push(convertToFahr(celsius[i]));
}
console.log(fahrenheit);