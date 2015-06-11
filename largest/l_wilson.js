var findLargestNum = function(numArray){
	var largestNum = numArray[0];
	for(var i=0; i<numArray.length; i++){
		if(numArray[i] > largestNum){
			largestNum = numArray[i];
		}
	}
	return largestNum;
};

var setOfNumbers = [23,56, 34, 67, 45, 90, 82];
console.log("The array contains: "+ setOfNumbers);
console.log("The largest number in the array is "+findLargestNum(setOfNumbers));