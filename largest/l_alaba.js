var largestNum = function (yourNumArray)
{
	var tempLargestNum = 0;
	for(i=0;i<yourNumArray.length;i++)
	{
		if(i===0)
		{
			tempLargestNum = yourNumArray[0];
		}

		if(yourNumArray[i] > tempLargestNum)
		{
			tempLargestNum = yourNumArray[i];
		}

	}

	return(tempLargestNum);
};

var testArray = [2,5,8,77,6,9,8];
console.log(largestNum(testArray));
