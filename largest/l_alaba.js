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
