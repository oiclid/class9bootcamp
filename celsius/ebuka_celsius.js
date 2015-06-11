function convertToCelsius(temp) {
    var f = ((9 / 5) * temp) + 32;
    return f;
}

function convertManyCelsius(temp) {
   var f = [];
   for(var i = 0; i < temp.length; i++){
       f.push(convertToCelsius(temp[i]));
    }
    return f;
}

convertManyCelsius([1, 25, 60, 100]);