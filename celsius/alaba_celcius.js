var tempConverter = function(celciusArray)
{
	var toReturn = [];

	for(i=0;i<celciusArray.length;i++)
	{
		toReturn.push(((celciusArray[i]/5)*9) + 32);
	}

	return(toReturn);

}