var invertedWord = "";
var wordOrderSwap = function (word)
{
	var wordLength = word.length;
	var tempWord = "";
	
	
	for(i=wordLength;i>0;i--)
	{
	    tempWord = tempWord + word.substr(i-1, 1);
	}
	return(tempWord);
}

invertedWord = wordOrderSwap("university");
console.log(invertedWord);