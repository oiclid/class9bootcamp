var convertToFahrenheit = function(celciusArray){
	var fahreinheitArray = [];
	for(var i=0; i<celciusArray.length; i++){
		fahreinheitArray.push(((9/5)*celciusArray[i])+32);
	}
	return fahreinheitArray;
};

var celciusTemps = [0, 35, 45, 100];
var fahrenheitTemps = convertToFahrenheit(celciusTemps);

console.log(celciusTemps);
console.log(fahrenheitTemps);