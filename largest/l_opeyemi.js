/* this is my largest number program */

var max = function (arrayList) {
	var maxValue = arrayList[0];
	for (var i=1; i<arrayList.length; i++) {
		if (arrayList[i]>=maxValue) {
			maxValue = arrayList[i];
		}
	}
	return maxValue;
};