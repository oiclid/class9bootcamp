var word = prompt("Enter the word");
	var reverseWord = function(word) {
	var wordLength = word.length;
	var array1 = [];
	for (var i = 0; i < wordLength ; i++) {
		var letter = word.charAt(wordLength - i - 1);
		array1.push(letter);
	}
	var answer = array1.join("");
	document.write(answer);
	}
	reverseWord(word);