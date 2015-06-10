var aString = "university";
var reversedStr = "";
for(var i = aString.length; i >= 0; i--){
	reversedStr = reversedStr + aString.charAt(i);
}
console.log(reversedStr);