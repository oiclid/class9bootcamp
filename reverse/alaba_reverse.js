var invertedWord = "";
var wordOrderSwap = function (word)
{
	var wordLength = word.length;
	var tempWord = "";
	
	
	for(i=wordLength;i>0;i--)
	{
	    var tempWord = tempWord + word.substr(i-1, 1);
	}
	console.log(tempWord);
}

wordOrderSwap("fight");
console.log(invertedWord);
