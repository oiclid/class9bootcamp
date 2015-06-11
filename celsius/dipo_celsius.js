var convertCToF = function(CArray) {
    var FArray = [];
	for (var i = 0; i < CArray.length; i++) {
		var FValue = ((9 * CArray[i]) / 5 ) + 32;
		FArray.push(FValue);
	}
	return FArray;
};

var d = [100, 8, 99, 67]
convertCToF(d);