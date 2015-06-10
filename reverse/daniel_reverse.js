function reverse(myWord) {
  var o = '';
  for (var i = myWord.length - 1; i >= 0; i--)
    o += myWord[i];
  return o;
}
reverse('University');