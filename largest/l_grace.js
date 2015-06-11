var mynumbers = [1,-3,5,8,109,100,55,2,-7,9];

var largest = function(numbers)
{
	large=-Infinity;
	for (i=0;i<numbers.length;i++)
	{
		if (numbers[i]>large)
			large=numbers[i];
	}
	return large;
}
console.log(largest(mynumbers));