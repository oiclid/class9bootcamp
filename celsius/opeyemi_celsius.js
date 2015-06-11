var convertManyCelsius = function(celsiusArray) {
    var fahrenheitArray = [];
    for ( var i=0; i<celsiusArray.length; i++) {
        fahrenheitArray[i] =(9/5)*celsiusArray[i]+32; 
    }
    return fahrenheitArray;
}