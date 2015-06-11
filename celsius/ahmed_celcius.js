var convertToFahreheit = function(cels){
	var fah = [];
	for(var i = 0; i <= cels.length - 1; i++){
		fah.push(((9/5)*cels[i])+32);
	}
	return fah;
};
var cels = [0, 56, 89, 7];
var fahTemps = convertToFahreheit(cels);
console.log(fahTemps);