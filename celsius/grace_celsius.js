var celsius= [100,90,80,20,10];

function convertManyCelsius(celsius)
{
	var fahrenheit=[];
var fah=0;
    for(i=0;i<celsius.length;i++)
{
    fah=((9*celsius[i])/5) + 32;
    fahrenheit.push(fah);
}
return fahrenheit;
}
console.log(convertManyCelsius(celsius));
    
    

