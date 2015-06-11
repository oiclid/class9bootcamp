var convertMultipleFahrenheit = function (celsius) {
    var fahren = [];
    for (var i=0; i<=celsius.length-1; i++){
    var fahrenheit = (9/5)*celsius[i] + 32;
    fahren.push(fahrenheit);
    }
    return fahren
};
var celsius = [217,100,120];


console.log(convertMultipleFahrenheit(celsius));

